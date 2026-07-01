import { AxiosInstance } from "axios";
import { MoloniApiMethods } from "../abstract-moloni-object";

export class DocumentSetsMoloni extends MoloniApiMethods<'documentSets'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'documentSets');
  }
  getOne() {
    return {};
  }
}
