import { Injectable, Logger, Scope } from '@nestjs/common';
import axios from 'axios';

const http = axios.create({
  baseURL: process.env['MOLONI_API_ENDPOINT'],
  headers: {
    'Content-Type': 'application/json',
    client_id: process.env['MOLONI_CLIENT_ID'],
    client_secret: process.env['MOLONI_CLIENT_SECRET'],
    username: process.env['MOLONI_USERNAME'],
    password: process.env['MOLONI_PASSWORD'],
  },
});

@Injectable()
export class HttpInstanceMoloni {
  private accessToken?: string = process.env['MOLONI_ACCESS_TOKEN'];
  private refreshToken: string | null = null;
  private tokenExpiresAt: number | null = null;
  public readonly logger = new Logger(this.constructor.name);

  http = http;

  constructor() {
    this.setupInterceptorOnce();
  }

  /**
   * Evita adicionar múltiplos interceptores (importante para evitar leaks)
   */
  private setupInterceptorOnce() {
    this.http.interceptors.request.use(async (config) => {
      await this.ensureAuth();
      config.method = 'post';
      config.params = {
        ...(config.params || {}),
        access_token: this.accessToken,
        json: true,
        human_errors: true,
      };
      return config;
    });

    return
  }

  /**
   * Garante que o access token esteja válido antes de qualquer request
   */
  private async ensureAuth(): Promise<void> {
    const now = Math.floor(Date.now() / 1000);

    try {
      if (
        this.accessToken &&
        this.tokenExpiresAt &&
        now < this.tokenExpiresAt
      ) {
        return;
      }

      if (this.refreshToken) {
        await this.refreshAccessToken();
      } else {
        await this.passwordAuth();
      }
      return;
    } catch (err) {
      this.logger.error('Falha na autenticação Moloni', err);
      throw new Error('Não foi possível autenticar com a Moloni');
    }
  }

  /**
   * Autenticação inicial com grant_type=password
   */
  private async passwordAuth(): Promise<void> {
    const body = {
      grant_type: 'password',
      client_id: process.env['MOLONI_CLIENT_ID'],
      client_secret: process.env['MOLONI_CLIENT_SECRET'],
      username: process.env['MOLONI_USERNAME'],
      password: process.env['MOLONI_PASSWORD'],
    };

    const { data } = await this.http.post(
      `${process.env['MOLONI_API_ENDPOINT']}/grant/?grant_type=password`,
      body
    );

    this.setTokens(data);
    return;
  }

  /**
   * Atualiza o access token via refresh_token
   */
  private async refreshAccessToken(): Promise<void> {
    const body = {
      grant_type: 'refresh_token',
      refresh_token: this.refreshToken,
      client_id: process.env['MOLONI_CLIENT_ID'],
      client_secret: process.env['MOLONI_CLIENT_SECRET'],
      username: process.env['MOLONI_USERNAME'],
      password: process.env['MOLONI_PASSWORD'],
    };

    const { data } = await this.http.post(
      `${process.env['MOLONI_API_ENDPOINT']}/grant/?grant_type=refresh_token`,
      body
    );

    this.setTokens(data);
    return;
  }

  /**
   * Atualiza tokens na memória
   */
  private setTokens(data: any): void {
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;
    this.tokenExpiresAt = Math.floor(Date.now() / 1000) + data.expires_in - 30;
    this.logger.log('Tokens atualizados com sucesso.');
    return;
  }
}
