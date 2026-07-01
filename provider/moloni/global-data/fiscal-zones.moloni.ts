import { AxiosInstance } from 'axios';
import { MoloniGlobalDataApiMethods } from '../abstract-moloni-global-data';

export class FiscalZonesMoloni extends MoloniGlobalDataApiMethods<'fiscalZones'> {
  constructor(httpClient: AxiosInstance) {
    super(httpClient, 'fiscalZones');
  }
}