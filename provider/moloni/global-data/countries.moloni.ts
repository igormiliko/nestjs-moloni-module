import { AxiosInstance } from 'axios';
import { MoloniGlobalDataApiMethods } from '../abstract-moloni-global-data';

export class CountriesMoloni extends MoloniGlobalDataApiMethods<'countries'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'countries');
  }
}
