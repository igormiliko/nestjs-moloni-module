import {
  Injectable,
  InternalServerErrorException,
  Logger,
  Scope,
} from '@nestjs/common';
import { MoloniService } from './provider/moloni/moloni.service';
import {
  $Enums,
  account,
  highlight,
  highlight_payment_transaction,
  highlight_type,
  plan,
  Prisma,
  subscription,
  user,
} from '@prisma/client';
import { addDays, format } from 'date-fns';

type TPaymentMethod =
  | 'credit_card'
  | 'paypal'
  | 'pix'
  | 'mbway'
  | 'direct_debit'
  | 'bank_transfer'
  | 'reference_mb'
  | 'manual';

@Injectable()
export class BillingService {
  constructor(private moloniService: MoloniService) {}

  private async getCompanyId() {
    const company = await this.moloniService
      .getComponents()
      .companies.getAll(null);

    return company.find((c) => c.vat === '518924718')?.company_id;
  }

  private async getCountryId() {
    const country = await this.moloniService
      .getComponents()
      .countries.getAll(null);
    const [pt] = country.filter((c) => c.iso_3166_1 === 'pt');
    return pt.country_id;
  }

  private async getLanguageId() {
    const language = await this.moloniService
      .getComponents()
      .languages.getAll(null);
    const [pt] = language.filter((c) => c.code === 'pt');
    return pt.language_id;
  }

  private async getMaturityDateId({ company_id }: { company_id: number }) {
    const maturity_dates = await this.moloniService
      .getComponents()
      .maturityDates.getAll({
        company_id,
      });
    const [maturity_date] = maturity_dates.filter((pm) => pm.days === 0);
    return maturity_date.maturity_date_id;
  }

  private async getDeliveryMethodId({ company_id }: { company_id: number }) {
    const delivery_methods = await this.moloniService
      .getComponents()
      .deliveryMethods.getAll({
        company_id,
      });
    const [delivery_method] = delivery_methods.filter(
      (pm) => pm.name === 'digital'
    );
    return delivery_method.delivery_method_id;
  }

  private async getDocumentSetId({ company_id }: { company_id: number }) {
    const document_sets = await this.moloniService
      .getComponents()
      .documentSets.getAll({
        company_id,
      });

    const [document_set] = document_sets.filter((pm) => pm.name === 'FT25');
    return document_set.document_set_id;
  }

  private async getPaymentMethodId({
    company_id,
    paymentMethod,
  }: {
    company_id: number;
    paymentMethod: TPaymentMethod;
  }) {
    const payment_methods = await this.moloniService
      .getComponents()
      .paymentMethods.getAll({
        company_id,
      });
    const [payment_method] = payment_methods.filter(
      (pm) => pm.name === paymentMethod
    );

    return payment_method.payment_method_id;
  }

  async createCustomer({
    customer_id,
    country_identifier,
    paymentMethod,
    email,
    phone_number,
  }: {
    customer_id: string;
    phone_number: string;
    country_identifier: string;
    email: string;
    paymentMethod: string;
  }) {
    try {
      const country_id = 1;
      const language_id = 1;
      const company_id = 360152;

      const customer = await this.moloniService
        .getComponents()
        .customers.getByEmail(email);

      if (customer.length) {
        return;
      }

      const payment_method_id = await this.getPaymentMethodId({
        company_id,
        paymentMethod: paymentMethod as any,
      });

      if (!payment_method_id) {
        throw new InternalServerErrorException(
          'Payment method not found in billing provider'
        );
      }

      const maturity_date_id = await this.getMaturityDateId({
        company_id,
      });

      if (!maturity_date_id) {
        throw new InternalServerErrorException(
          'Maturity not found in billing provider'
        );
      }

      const delivery_method_id = await this.getDeliveryMethodId({
        company_id,
      });

      if (!delivery_method_id) {
        throw new InternalServerErrorException(
          'Delivery method not found in billing provider'
        );
      }

      const document_type_id = await this.getDocumentSetId({
        company_id,
      });

      if (!document_type_id) {
        throw new InternalServerErrorException(
          'Document type not found in billing provider'
        );
      }

      await this.moloniService.getComponents().customers.insert({
        company_id,
        country_id,
        language_id,
        payment_method_id,
        maturity_date_id,
        delivery_method_id,
        document_type_id,
        discount: 0,
        copies_count: 0,
        name: customer_id,
        vat: country_identifier,
        email: email,
        credit_limit: 0,
        zip_code: '',
        address: '',
        salesman_id: 0,
        city: '',
        payment_day: 0,
        number: phone_number,
      });
      return;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'Error while creeating customer on billing provider'
      );
    }
  }

  async createReceipt(transaction: {
    id_payment_transaction: string;
    amount: Prisma.Decimal;
    status: $Enums.payment_transaction_status;
    created_at: Date;
    discount: Prisma.Decimal;
    discount_type: string;
    highlight_payment_transaction: {
      highlight: highlight & {
        highlight_type: highlight_type;
      };
    }[];
    subscription: subscription & {
      plan: plan;
      account: account & {
        user: user;
      };
    };
  }) {
    try {
      const [_products_category] = await this.moloniService
        .getComponents()
        .productCategories.getAll({
          company_id: 360152,
          parent_id: 0,
        });

      const _products = await this.moloniService
        .getComponents()
        .products.getAll({
          company_id: 360152,
          category_id: _products_category.category_id,
        });

      const [final_client] = await this.moloniService
        .getComponents()
        .customers.getByVat('999999990');

      const [customer] = await this.moloniService
        .getComponents()
        .customers.getByEmail(transaction.subscription.account.user.email);

      const documentsSetId = await this.getDocumentSetId({
        company_id: 360152,
      });

      const highlights = transaction.highlight_payment_transaction.map((h) => {
        const [moloni_product_id] = _products.filter(
          (v) =>
            v.reference === String(h.highlight.highlight_type.id_highlight_type)
        );

        if (!moloni_product_id) {
          throw new InternalServerErrorException(
            'Product not found in billing provider'
          );
        }

        return {
          name: h.highlight.highlight_type.name,
          price: Number(h.highlight.highlight_type.price),
          product_id: Number(moloni_product_id.product_id),
          qty: 1,
        };
      });

      const subscription = transaction.subscription.plan.price
        ? [transaction.subscription].map((s) => {
            const [moloni_product_id] = _products.filter(
              (v) => s.plan.reference.includes(String(v.reference))
            );

            if (!moloni_product_id) {
              throw new InternalServerErrorException(
                'Product not found in billing provider'
              );
            }
            
            return {
              name: s.plan.name || '',
              price: Number(s.plan.price),
              product_id: Number(moloni_product_id.product_id),
              qty: 1,
            };
          })
        : [];

      const products = [...highlights, ...subscription];
      
      console.log({
        company_id: 360152,
        customer_id: customer?.customer_id || final_client?.customer_id,
        document_set_id: [documentsSetId],
        products,
        value: Number(transaction?.amount) - Number(transaction.discount),
        date: format(transaction.created_at, 'yyyy/MM/dd'),
        expiration_date: format(
          addDays(transaction.created_at, 7),
          'yyyy/MM/dd'
        ),
      });

      // this.moloniService.getComponents().invoiceReceipts.insert({
      //   company_id: 360152,
      //   customer_id: customer?.customer_id || final_client?.customer_id,
      //   document_set_id: documentsSetId,
      //   products,
      //   value: process.env['ENVIROMENT'] !== 'dist' ? 0 : Number(transaction?.amount) - Number(transaction.discount),
      //   date: format(transaction.created_at, 'yyyy-MM-dd'),
      //   expiration_date: format(
      //     addDays(transaction.created_at, 7),
      //     'yyyy-MM-dd'
      //   ),
      //   notes: 'ENVIROMENT: ' + process.env['ENVIROMENT']
      // })
      // .then((r) => {
      //   console.log('CREATE RECEIPT', r)
      //   return
      // })
      // .catch((e) => {
      //   Logger.error(e)
      // });

    } catch (error) {
      console.log(error);
      throw new Error('Error while creating billing');
    }
  }
}
