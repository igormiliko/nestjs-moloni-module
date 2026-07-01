// https://www.moloni.pt/dev/products/product-categories/

import { AxiosInstance } from 'axios';
import { MoloniApiMethods } from '../abstract-moloni-object';

export class ProductCategoriesMoloni extends MoloniApiMethods<'productCategories'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'productCategories');
  }
  getOne() {
    return {};
  }
}
