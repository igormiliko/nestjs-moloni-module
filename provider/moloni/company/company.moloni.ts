import { AxiosInstance } from 'axios';
import { MoloniGlobalDataApiMethods } from '../abstract-moloni-global-data';

export class CompanyMoloni extends MoloniGlobalDataApiMethods<'companies'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'companies');
  }
  getOne() {
    return {};
  }
}
