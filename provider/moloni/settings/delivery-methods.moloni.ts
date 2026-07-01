import { AxiosInstance } from 'axios';
import { MoloniApiMethods } from '../abstract-moloni-object';

export class DeliveryMethodsMoloni extends MoloniApiMethods<'deliveryMethods'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'deliveryMethods');
  }
  getOne() {
    return {};
  }
}
