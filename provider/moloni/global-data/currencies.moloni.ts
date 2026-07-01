import { AxiosInstance } from 'axios';
import { MoloniGlobalDataApiMethods } from '../abstract-moloni-global-data';

export class CurrenciesMoloni extends MoloniGlobalDataApiMethods<'currencies'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'currencies');
  }
}