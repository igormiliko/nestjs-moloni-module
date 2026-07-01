import { AxiosInstance } from "axios";
import { MoloniApiMethods } from "../abstract-moloni-object";

export class PaymentMethodsMoloni extends MoloniApiMethods<'paymentMethods'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'paymentMethods');
  }
  getOne() {
    return {};
  }
}
