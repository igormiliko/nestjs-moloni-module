// https://www.moloni.pt/dev/products/products/

import { AxiosInstance } from 'axios';
import { MoloniApiMethods } from '../abstract-moloni-object';

export class ProductMoloni extends MoloniApiMethods<'products'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'products');
  }
  getOne() {
    return {};
  }
}
