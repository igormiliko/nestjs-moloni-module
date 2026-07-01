// https://www.moloni.pt/dev/settings/tax-fees/

import { AxiosInstance } from 'axios';
import { MoloniApiMethods } from '../abstract-moloni-object';

export class TaxFeeMoloni extends MoloniApiMethods<'taxes'> {
   constructor(httpClient: AxiosInstance) {
        super(httpClient, 'taxes')
    }
    getOne() {
        return {}
    }
}