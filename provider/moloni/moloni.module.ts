import { Module } from '@nestjs/common';
import { MoloniService } from './moloni.service';
import { InvoicesMoloni } from './documents/invoices.moloni';
import { CustomersMoloni } from './entities/customers.moloni';
import { ProductCategoriesMoloni } from './products/product-categorie.moloni';
import { ProductMoloni } from './products/product.moloni';
import { TaxFeeMoloni } from './settings/tax-fee.moloni';
import { CountriesMoloni } from './global-data/countries.moloni';
import { CurrenciesMoloni } from './global-data/currencies.moloni';
import { FiscalZonesMoloni } from './global-data/fiscal-zones.moloni';
import { LanguagesMoloni } from './global-data/languages.moloni';
import { DocumentSetsMoloni } from './settings/document-set.moloni';
import { MaturityDatesMoloni } from './settings/maturity-dates.moloni';
import { PaymentMethodsMoloni } from './settings/payment-method.moloni';
import { HttpInstanceMoloni } from './http-instance.moloni';

@Module({
  providers: [
    MoloniService,
    CountriesMoloni,
    CurrenciesMoloni,
    FiscalZonesMoloni,
    LanguagesMoloni,
    HttpInstanceMoloni,
    DocumentSetsMoloni,
    MaturityDatesMoloni,
    PaymentMethodsMoloni,
    InvoicesMoloni,
    CustomersMoloni,
    ProductCategoriesMoloni,
    ProductMoloni,
    TaxFeeMoloni,
  ],
  exports: [
    MoloniService,
    CountriesMoloni,
    CurrenciesMoloni,
    FiscalZonesMoloni,
    LanguagesMoloni,
    DocumentSetsMoloni,
    MaturityDatesMoloni,
    PaymentMethodsMoloni,
    InvoicesMoloni,
    HttpInstanceMoloni,
    CustomersMoloni,
    ProductCategoriesMoloni,
    ProductMoloni,
    TaxFeeMoloni,
  ],
})
export class MoloniModule {}
