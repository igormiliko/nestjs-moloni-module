// https://www.moloni.pt/dev/documents/invoices

import { AxiosInstance } from 'axios';
import { MoloniApiMethods } from '../abstract-moloni-object';

export class InvoicesMoloni extends MoloniApiMethods<'invoices'> {
    constructor(httpClient: AxiosInstance) {
        super(httpClient, 'invoices')
    }
    getOne() {
        return {}
    }
}