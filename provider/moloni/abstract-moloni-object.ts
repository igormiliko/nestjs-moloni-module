import { AxiosInstance } from 'axios';
import {
  TMoloniBodyRequestMap,
  TMoloniBodyResponseMap,
  TMoloniObjectsNames,
} from './types/moloni.type';

export class MoloniApiMethods<TMoloniObject extends TMoloniObjectsNames> {
  constructor(
    protected httpClient: AxiosInstance,
    private domainPath: string,
  ) {}

  async getAll(
    body: TMoloniBodyRequestMap[TMoloniObject]['getAll'],
  ): Promise<TMoloniBodyResponseMap[TMoloniObject]['getAll'][]> {
    try {
      const response = await this.httpClient.post(
        `${this.domainPath}/getAll/`,
        body,
      );
      return response.data;
    } catch (error) {
      console.log(error)
      throw new Error(
        `Erro ao buscar dados de ${this.domainPath}/getAll: ${
          (error as Error).message
        }`,
      );
    }
  }

  async insert(
    body: TMoloniBodyRequestMap[TMoloniObject]['insert'],
  ): Promise<TMoloniBodyResponseMap[TMoloniObject]['insert']> {
    try {
      const response = await this.httpClient.post(
        `${this.domainPath}/insert/`,
        body,
      );
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao inserir em ${this.domainPath}/insert: ${
          (error as Error).message
        }`,
      );
    }
  }

  async update(
    body: TMoloniBodyRequestMap[TMoloniObject]['update'],
  ): Promise<TMoloniBodyResponseMap[TMoloniObject]['update']> {
    try {
      const response = await this.httpClient.post(
        `${this.domainPath}/update/`,
        body,
      );
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao atualizar em ${this.domainPath}/update: ${
          (error as Error).message
        }`,
      );
    }
  }

  async delete(
    body: TMoloniBodyRequestMap[TMoloniObject]['delete'],
  ): Promise<TMoloniBodyResponseMap[TMoloniObject]['delete']> {
    try {
      const response = await this.httpClient.post(
        `${this.domainPath}/delete/`,
        body,
      );
      return response.data;
    } catch (error) {
      throw new Error(
        `Erro ao deletar em ${this.domainPath}/delete: ${
          (error as Error).message
        }`,
      );
    }
  }
}
