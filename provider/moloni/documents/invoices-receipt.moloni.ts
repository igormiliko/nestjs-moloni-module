// https://www.moloni.pt/dev/documents/invoices

import { AxiosInstance } from 'axios';
import { MoloniApiMethods } from '../abstract-moloni-object';

export class InvoicesReceiptMoloni extends MoloniApiMethods<'invoiceReceipts'> {
    constructor(httpClient: AxiosInstance) {
        super(httpClient, 'invoiceReceipts')
    }
    getOne() {
        return {}
    }
}