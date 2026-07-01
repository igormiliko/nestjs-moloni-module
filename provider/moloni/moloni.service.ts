import { Injectable, Logger } from '@nestjs/common';
import { InvoicesMoloni } from './documents/invoices.moloni';
import { CustomersMoloni } from './entities/customers.moloni';
import { ProductCategoriesMoloni } from './products/product-categorie.moloni';
import { ProductMoloni } from './products/product.moloni';
import { TaxFeeMoloni } from './settings/tax-fee.moloni';
import axios, { AxiosInstance } from 'axios';
import { CountriesMoloni } from './global-data/countries.moloni';
import { CurrenciesMoloni } from './global-data/currencies.moloni';
import { FiscalZonesMoloni } from './global-data/fiscal-zones.moloni';
import { DocumentSetsMoloni } from './settings/document-set.moloni';
import { MaturityDatesMoloni } from './settings/maturity-dates.moloni';
import { PaymentMethodsMoloni } from './settings/payment-method.moloni';
import { LanguagesMoloni } from './global-data/languages.moloni';
import { InvoicesReceiptMoloni } from './documents/invoices-receipt.moloni';
import { CompanyMoloni } from './company/company.moloni';
import { DeliveryMethodsMoloni } from './settings/delivery-methods.moloni';

@Injectable()
export class MoloniService {
  private accessToken: string | undefined = process.env['MOLONI_ACCESS_TOKEN'];
  private refreshToken: string | null = null;
  private tokenExpiresAt: number | null = null;
  private readonly logger = new Logger(MoloniService.name);
  private httpClient: AxiosInstance = axios.create({
  baseURL: process.env['MOLONI_API_ENDPOINT'],
  headers: {
    'Content-Type': 'application/json',
    client_id: process.env['MOLONI_CLIENT_ID'],
    client_secret: process.env['MOLONI_CLIENT_SECRET'],
    username: process.env['MOLONI_USERNAME'],
    password: process.env['MOLONI_PASSWORD'],
  },
});
  // Intercepta cada request antes de sair

  constructor() {
    this.httpClient.interceptors.request.use(async (config) => {
      await this.ensureAuth();

      config.method = 'post';

      config.data = {
        ...config.data,
        company_id: 360152
      }

      // Configura query string obrigatória
      config.params = {
        ...(config.params || {}),
        access_token: this.accessToken,
        json: true, // enviar sempre JSON
        human_errors: true, // opcional, mas recomendável
      };

      return config;
    });
  }

  /**
   * Garante que o access token esteja válido antes de qualquer request
   */
  private async ensureAuth(): Promise<void> {
    const now = Math.floor(Date.now() / 1000);

    if (this.accessToken && this.tokenExpiresAt && now < this.tokenExpiresAt) {
      return;
    }

    if (
      this.refreshToken &&
      (!this.tokenExpiresAt || now >= this.tokenExpiresAt)
    ) {
      try {
        await this.refreshAccessToken();
        return;
      } catch (err) {
        this.logger.warn(
          'Falha ao fazer refresh token. Tentando login com password.'
        );
      }
    }

    await this.passwordAuth();
  }

  /**
   * Autenticação inicial com grant_type=password
   */
  private async passwordAuth(): Promise<void> {
    const params = {
      grant_type: 'password',
      client_id: process.env['MOLONI_CLIENT_ID'],
      client_secret: process.env['MOLONI_CLIENT_SECRET'],
      username: process.env['MOLONI_USERNAME'],
      password: process.env['MOLONI_PASSWORD'],
    };

    const { data } = await axios.get(
      `${process.env['MOLONI_API_ENDPOINT']}/grant/`,
      { params }
    );
    this.setTokens(data);
  }

  /**
   * Refresh token
   */
  private async refreshAccessToken(): Promise<void> {
    const params = {
      grant_type: 'refresh_token',
      client_id: process.env['MOLONI_CLIENT_ID'],
      client_secret: process.env['MOLONI_CLIENT_SECRET'],
      refresh_token: this.refreshToken,
    };

    const { data } = await axios.get(
      `${process.env['MOLONI_API_ENDPOINT']}/grant/`,
      { params }
    );
    this.setTokens(data);
  }

  /**
   * Atualiza os tokens em memória
   */
  private setTokens(data: any): void {
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;
    this.tokenExpiresAt = Math.floor(Date.now() / 1000) + data.expires_in - 30; // -30s de margem
    this.logger.log('Tokens atualizados com sucesso.');
  }

  private readonly components = {
    invoices: new InvoicesMoloni(this.httpClient),
    customers: new CustomersMoloni(this.httpClient),
    productCategories: new ProductCategoriesMoloni(this.httpClient),
    products: new ProductMoloni(this.httpClient),
    taxes: new TaxFeeMoloni(this.httpClient),
    countries: new CountriesMoloni(this.httpClient),
    currencies: new CurrenciesMoloni(this.httpClient),
    fiscalZones: new FiscalZonesMoloni(this.httpClient),
    languages: new LanguagesMoloni(this.httpClient),
    documentSets: new DocumentSetsMoloni(this.httpClient),
    maturityDates: new MaturityDatesMoloni(this.httpClient),
    paymentMethods: new PaymentMethodsMoloni(this.httpClient),
    invoiceReceipts: new InvoicesReceiptMoloni(this.httpClient),
    companies: new CompanyMoloni(this.httpClient),
    deliveryMethods: new DeliveryMethodsMoloni(this.httpClient),
  };

  getComponents() {
    return this.components;
  }
}
