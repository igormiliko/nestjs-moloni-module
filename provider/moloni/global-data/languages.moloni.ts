import { AxiosInstance } from 'axios';
import { MoloniGlobalDataApiMethods } from '../abstract-moloni-global-data';

export class LanguagesMoloni extends MoloniGlobalDataApiMethods<'languages'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'languages');
  }
}