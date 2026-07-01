import { AxiosInstance } from "axios";
import { MoloniApiMethods } from "../abstract-moloni-object";

export class MaturityDatesMoloni extends MoloniApiMethods<'maturityDates'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'maturityDates');
  }
  getOne() {
    return {};
  }
}
