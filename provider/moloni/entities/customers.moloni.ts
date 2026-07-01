// https://www.moloni.pt/dev/entities/customers/

import { AxiosInstance } from 'axios';
import { MoloniApiMethods } from '../abstract-moloni-object';

export class CustomersMoloni extends MoloniApiMethods<'customers'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'customers');
  }
  
  getOne() {
    return {};
  }

  async getByEmail(email: string) {
    const response = await this.httpClient.post('/customers/getByEmail/', { email });

    return response.data
  }

  async getByVat(vat: string) {
    const response = await this.httpClient.post('/customers/getByVat/', { vat });

    return response.data
  }
}
