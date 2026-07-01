import { AxiosInstance } from 'axios';
import {
  TMoloniGlobalDataBodyRequestMap,
  TMoloniGlobalDataResponseMap,
  TMoloniObjectsGlobalDataNames,
} from './types/moloni.type';

export class MoloniGlobalDataApiMethods<
  TMoloniObjectGlobalData extends TMoloniObjectsGlobalDataNames
> {
  constructor(
    protected httpClient: AxiosInstance,
    private domainPath: TMoloniObjectsGlobalDataNames,
  ) {}

  async getAll(
    body: TMoloniGlobalDataBodyRequestMap[TMoloniObjectGlobalData]['getAll'],
  ): Promise<TMoloniGlobalDataResponseMap[TMoloniObjectGlobalData]['getAll'][]> {
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
}
