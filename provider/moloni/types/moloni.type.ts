import {
  TMoloni_Customers_Delete_BodyRequest,
  TMoloni_Customers_Delete_BodyResponse,
  TMoloni_Customers_GetAll_BodyRequest,
  TMoloni_Customers_GetAll_BodyResponse,
  TMoloni_Customers_Insert_BodyRequest,
  TMoloni_Customers_Insert_BodyResponse,
  TMoloni_Customers_Update_BodyRequest,
  TMoloni_Customers_Update_BodyResponse,
} from './customers.type';
import {
  TMoloni_DocumentSets_Delete_BodyRequest,
  TMoloni_DocumentSets_Delete_BodyResponse,
  TMoloni_DocumentSets_GetAll_BodyRequest,
  TMoloni_DocumentSets_GetAll_BodyResponse,
  TMoloni_DocumentSets_Insert_BodyRequest,
  TMoloni_DocumentSets_Insert_BodyResponse,
  TMoloni_DocumentSets_Update_BodyRequest,
  TMoloni_DocumentSets_Update_BodyResponse,
} from './document-sets.type';
import {
  TMoloni_Countries_GetAll_BodyRequest,
  TMoloni_Countries_GetAll_BodyResponse,
  TMoloni_Currencies_GetAll_BodyRequest,
  TMoloni_Currencies_GetAll_BodyResponse,
  TMoloni_FiscalZones_GetAll_BodyRequest,
  TMoloni_FiscalZones_GetAll_BodyResponse,
  TMoloni_Languages_GetAll_BodyRequest,
  TMoloni_Languages_GetAll_BodyResponse,
  TMoloni_Companies_GetAll_BodyResponse,
  TMoloni_Companies_GetAll_BodyRequest,
} from './global-data.type';
import {
  TMoloni_Invoices_Delete_BodyRequest,
  TMoloni_Invoices_Delete_BodyResponse,
  TMoloni_Invoices_GetAll_BodyRequest,
  TMoloni_Invoices_GetAll_BodyResponse,
  TMoloni_Invoices_Insert_BodyRequest,
  TMoloni_Invoices_Insert_BodyResponse,
  TMoloni_Invoices_Update_BodyRequest,
  TMoloni_Invoices_Update_BodyResponse,
} from './invoices.type';

import {
  TMoloni_InvoiceReceipts_Insert_BodyResponse,
  TMoloni_InvoiceReceipts_Update_BodyResponse,
  TMoloni_InvoiceReceipts_Delete_BodyResponse,
  TMoloni_InvoiceReceipts_GetAll_BodyResponse,
  TMoloni_InvoiceReceipts_Insert_BodyRequest,
  TMoloni_InvoiceReceipts_Update_BodyRequest,
  TMoloni_InvoiceReceipts_Delete_BodyRequest,
  TMoloni_InvoiceReceipts_GetAll_BodyRequest,
} from './invoice-receipts.type';

import {
  TMoloni_MaturityDates_Delete_BodyRequest,
  TMoloni_MaturityDates_Delete_BodyResponse,
  TMoloni_MaturityDates_GetAll_BodyRequest,
  TMoloni_MaturityDates_GetAll_BodyResponse,
  TMoloni_MaturityDates_Insert_BodyRequest,
  TMoloni_MaturityDates_Insert_BodyResponse,
  TMoloni_MaturityDates_Update_BodyRequest,
  TMoloni_MaturityDates_Update_BodyResponse,
} from './maturity-dates.type';
import {
  TMoloni_PaymentMethods_Delete_BodyRequest,
  TMoloni_PaymentMethods_Delete_BodyResponse,
  TMoloni_PaymentMethods_GetAll_BodyRequest,
  TMoloni_PaymentMethods_GetAll_BodyResponse,
  TMoloni_PaymentMethods_Insert_BodyRequest,
  TMoloni_PaymentMethods_Insert_BodyResponse,
  TMoloni_PaymentMethods_Update_BodyRequest,
  TMoloni_PaymentMethods_Update_BodyResponse,
} from './payment-methods.type';
import {
  TMoloni_ProductCategories_Delete_BodyRequest,
  TMoloni_ProductCategories_Delete_BodyResponse,
  TMoloni_ProductCategories_GetAll_BodyRequest,
  TMoloni_ProductCategories_GetAll_BodyResponse,
  TMoloni_ProductCategories_Insert_BodyRequest,
  TMoloni_ProductCategories_Insert_BodyResponse,
  TMoloni_ProductCategories_Update_BodyRequest,
  TMoloni_ProductCategories_Update_BodyResponse,
} from './product-categorie.type';
import {
  TMoloni_Product_Delete_BodyRequest,
  TMoloni_Product_Delete_BodyResponse,
  TMoloni_Product_GetAll_BodyRequest,
  TMoloni_Product_GetAll_BodyResponse,
  TMoloni_Product_Insert_BodyRequest,
  TMoloni_Product_Insert_BodyResponse,
  TMoloni_Product_Update_BodyRequest,
  TMoloni_Product_Update_BodyResponse,
} from './product.type';
import {
TMoloni_DeliveryMethods_Insert_BodyRequest,
TMoloni_DeliveryMethods_Update_BodyRequest,
TMoloni_DeliveryMethods_Delete_BodyRequest,
TMoloni_DeliveryMethods_GetAll_BodyRequest,
TMoloni_DeliveryMethods_Insert_BodyResponse,
TMoloni_DeliveryMethods_Update_BodyResponse,
TMoloni_DeliveryMethods_Delete_BodyResponse,
TMoloni_DeliveryMethods_GetAll_BodyResponse
} from './delivery-methods.type';
import {
  TMoloni_TaxFee_Delete_BodyRequest,
  TMoloni_TaxFee_Delete_BodyResponse,
  TMoloni_TaxFee_GetAll_BodyRequest,
  TMoloni_TaxFee_GetAll_BodyResponse,
  TMoloni_TaxFee_Insert_BodyRequest,
  TMoloni_TaxFee_Insert_BodyResponse,
  TMoloni_TaxFee_Update_BodyRequest,
  TMoloni_TaxFee_Update_BodyResponse,
} from './tax-fee.type';

export type TMoloniBodyResponseMap = {
  invoices: {
    insert: TMoloni_Invoices_Insert_BodyResponse;
    update: TMoloni_Invoices_Update_BodyResponse;
    delete: TMoloni_Invoices_Delete_BodyResponse;
    getAll: TMoloni_Invoices_GetAll_BodyResponse;
  };
  deliveryMethods: {
    insert: TMoloni_DeliveryMethods_Insert_BodyResponse;
    update: TMoloni_DeliveryMethods_Update_BodyResponse;
    delete: TMoloni_DeliveryMethods_Delete_BodyResponse;
    getAll: TMoloni_DeliveryMethods_GetAll_BodyResponse;
  };
  invoiceReceipts: {
    insert: TMoloni_InvoiceReceipts_Insert_BodyResponse;
    update: TMoloni_InvoiceReceipts_Update_BodyResponse;
    delete: TMoloni_InvoiceReceipts_Delete_BodyResponse;
    getAll: TMoloni_InvoiceReceipts_GetAll_BodyResponse;
  };
  customers: {
    insert: TMoloni_Customers_Insert_BodyResponse;
    update: TMoloni_Customers_Update_BodyResponse;
    delete: TMoloni_Customers_Delete_BodyResponse;
    getAll: TMoloni_Customers_GetAll_BodyResponse;
  };
  productCategories: {
    insert: TMoloni_ProductCategories_Insert_BodyResponse;
    update: TMoloni_ProductCategories_Update_BodyResponse;
    delete: TMoloni_ProductCategories_Delete_BodyResponse;
    getAll: TMoloni_ProductCategories_GetAll_BodyResponse;
  };
  products: {
    insert: TMoloni_Product_Insert_BodyResponse;
    update: TMoloni_Product_Update_BodyResponse;
    delete: TMoloni_Product_Delete_BodyResponse;
    getAll: TMoloni_Product_GetAll_BodyResponse;
  };
  taxes: {
    insert: TMoloni_TaxFee_Insert_BodyResponse;
    update: TMoloni_TaxFee_Update_BodyResponse;
    delete: TMoloni_TaxFee_Delete_BodyResponse;
    getAll: TMoloni_TaxFee_GetAll_BodyResponse;
  };
  documentSets: {
    insert: TMoloni_DocumentSets_Insert_BodyResponse;
    update: TMoloni_DocumentSets_Update_BodyResponse;
    delete: TMoloni_DocumentSets_Delete_BodyResponse;
    getAll: TMoloni_DocumentSets_GetAll_BodyResponse;
  };
  paymentMethods: {
    insert: TMoloni_PaymentMethods_Insert_BodyResponse;
    update: TMoloni_PaymentMethods_Update_BodyResponse;
    delete: TMoloni_PaymentMethods_Delete_BodyResponse;
    getAll: TMoloni_PaymentMethods_GetAll_BodyResponse;
  };
  maturityDates: {
    insert: TMoloni_MaturityDates_Insert_BodyResponse;
    update: TMoloni_MaturityDates_Update_BodyResponse;
    delete: TMoloni_MaturityDates_Delete_BodyResponse;
    getAll: TMoloni_MaturityDates_GetAll_BodyResponse;
  };
};

export type TMoloniBodyRequestMap = {
  invoices: {
    insert: TMoloni_Invoices_Insert_BodyRequest;
    update: TMoloni_Invoices_Update_BodyRequest;
    delete: TMoloni_Invoices_Delete_BodyRequest;
    getAll: TMoloni_Invoices_GetAll_BodyRequest;
  };
  deliveryMethods: {
    insert: TMoloni_DeliveryMethods_Insert_BodyRequest;
    update: TMoloni_DeliveryMethods_Update_BodyRequest;
    delete: TMoloni_DeliveryMethods_Delete_BodyRequest;
    getAll: TMoloni_DeliveryMethods_GetAll_BodyRequest;
  };
  invoiceReceipts: {
    insert: TMoloni_InvoiceReceipts_Insert_BodyRequest;
    update: TMoloni_InvoiceReceipts_Update_BodyRequest;
    delete: TMoloni_InvoiceReceipts_Delete_BodyRequest;
    getAll: TMoloni_InvoiceReceipts_GetAll_BodyRequest;
  };
  customers: {
    insert: TMoloni_Customers_Insert_BodyRequest;
    update: TMoloni_Customers_Update_BodyRequest;
    delete: TMoloni_Customers_Delete_BodyRequest;
    getAll: TMoloni_Customers_GetAll_BodyRequest;
  };
  productCategories: {
    insert: TMoloni_ProductCategories_Insert_BodyRequest;
    update: TMoloni_ProductCategories_Update_BodyRequest;
    delete: TMoloni_ProductCategories_Delete_BodyRequest;
    getAll: TMoloni_ProductCategories_GetAll_BodyRequest;
  };
  products: {
    insert: TMoloni_Product_Insert_BodyRequest;
    update: TMoloni_Product_Update_BodyRequest;
    delete: TMoloni_Product_Delete_BodyRequest;
    getAll: TMoloni_Product_GetAll_BodyRequest;
  };
  taxes: {
    insert: TMoloni_TaxFee_Insert_BodyRequest;
    update: TMoloni_TaxFee_Update_BodyRequest;
    delete: TMoloni_TaxFee_Delete_BodyRequest;
    getAll: TMoloni_TaxFee_GetAll_BodyRequest;
  };
  documentSets: {
    insert: TMoloni_DocumentSets_Insert_BodyRequest;
    update: TMoloni_DocumentSets_Update_BodyRequest;
    delete: TMoloni_DocumentSets_Delete_BodyRequest;
    getAll: TMoloni_DocumentSets_GetAll_BodyRequest;
  };
  paymentMethods: {
    insert: TMoloni_PaymentMethods_Insert_BodyRequest;
    update: TMoloni_PaymentMethods_Update_BodyRequest;
    delete: TMoloni_PaymentMethods_Delete_BodyRequest;
    getAll: TMoloni_PaymentMethods_GetAll_BodyRequest;
  };
  maturityDates: {
    insert: TMoloni_MaturityDates_Insert_BodyRequest;
    update: TMoloni_MaturityDates_Update_BodyRequest;
    delete: TMoloni_MaturityDates_Delete_BodyRequest;
    getAll: TMoloni_MaturityDates_GetAll_BodyRequest;
  };
};

export type TMoloniGlobalDataResponseMap = {
  currencies: {
    getAll: TMoloni_Currencies_GetAll_BodyResponse;
  };
  fiscalZones: {
    getAll: TMoloni_FiscalZones_GetAll_BodyResponse;
  };
  countries: {
    getAll: TMoloni_Countries_GetAll_BodyResponse;
  };
  languages: {
    getAll: TMoloni_Languages_GetAll_BodyResponse;
  };
  companies: {
    getAll: TMoloni_Companies_GetAll_BodyResponse;
  };
};

export type TMoloniGlobalDataBodyRequestMap = {
  currencies: {
    getAll: TMoloni_Currencies_GetAll_BodyRequest;
  };
  fiscalZones: {
    getAll: TMoloni_FiscalZones_GetAll_BodyRequest;
  };
  countries: {
    getAll: TMoloni_Countries_GetAll_BodyRequest;
  };
  languages: {
    getAll: TMoloni_Languages_GetAll_BodyRequest;
  };
  companies: {
    getAll: TMoloni_Companies_GetAll_BodyRequest;
  };
};

export type TMoloniObjectsNames =
  | 'invoices'
  | 'customers'
  | 'productCategories'
  | 'products'
  | 'taxes'
  | 'documentSets'
  | 'paymentMethods'
  | 'maturityDates'
  | 'deliveryMethods'
  | 'invoiceReceipts';

export type TMoloniObjectsGlobalDataNames =
  | 'currencies'
  | 'fiscalZones'
  | 'countries'
  | 'languages'
  | 'companies';
