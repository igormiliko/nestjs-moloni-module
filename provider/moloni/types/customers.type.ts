// ================== CUSTOMERS ======================= //
export type TMoloni_Customers_Insert_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Número de contribuinte / VAT (obrigatório) */
  vat: string;

  /** Número do cliente (máximo 20 caracteres) (obrigatório) */
  number: string;

  /** Nome do cliente (obrigatório) */
  name: string;

  /** Identificador do idioma (obrigatório) */
  language_id: number;

  /** Endereço (obrigatório) */
  address: string;

  /** Código postal (obrigatório) */
  zip_code: string;

  /** Cidade (obrigatório) */
  city: string;

  /** Identificador do país (obrigatório) */
  country_id: number;

  /** Identificador da data de vencimento (obrigatório) */
  maturity_date_id: number;

  /** Identificador do tipo de documento (obrigatório) */
  document_type_id: number;

  /** Número de cópias (obrigatório) */
  copies_count: number;

  /** Identificador do método de pagamento (obrigatório) */
  payment_method_id: number;

  /** Identificador do método de entrega (obrigatório) */
  delivery_method_id: number;

  /** Email (facultativo, pode ser string vazia) */
  email?: string;

  /** Website (facultativo, pode ser string vazia) */
  website?: string;

  /** Telefone (facultativo, pode ser string vazia) */
  phone?: string;

  /** Fax (facultativo, pode ser string vazia) */
  fax?: string;

  /** Nome do contato (facultativo, pode ser string vazia) */
  contact_name?: string;

  /** Email do contato (facultativo, pode ser string vazia) */
  contact_email?: string;

  /** Telefone do contato (facultativo, pode ser string vazia) */
  contact_phone?: string;

  /** Notas (facultativo, pode ser string vazia) */
  notes?: string;

  /** Identificador do vendedor (facultativo, pode ser zero) */
  salesman_id?: number;

  /** Identificador da classe de preço (facultativo, pode ser zero) */
  price_class_id?: number;

  /** Dia de pagamento (facultativo, pode ser zero) */
  payment_day?: number;

  /** Desconto (facultativo, pode ser zero) */
  discount?: number;

  /** Limite de crédito (facultativo, pode ser zero) */
  credit_limit?: number;

  /** Cópias (facultativo, array de números ou strings) */
  copies?: Array<any>;

  /** Observações de campo (facultativo, pode ser string vazia) */
  field_notes?: string;

  /** Quantidade de resultados (default: 50, máximo: 50) */
  qty?: number;

  /** Posição inicial (default: 0) */
  offset?: number;
};

export type TMoloni_Customers_Update_BodyRequest =
  Partial<Omit<TMoloni_Customers_Insert_BodyRequest, 'company_id'>> & {
    /** Identificador do cliente (obrigatório para update) */
    customer_id: number;
  };

export type TMoloni_Customers_Delete_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador do cliente (obrigatório) */
  customer_id: number;
};

export type TMoloni_Customers_GetAll_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador do cliente (obrigatório) */
  customer_id: number;

  /** Quantidade de resultados (default: 50, máximo: 50) */
  qty?: number;

  /** Posição inicial (default: 0) */
  offset?: number;
};

export type TMoloni_Customers_GetAll_BodyResponse = {
  /** Identificador do cliente (obrigatório) */
  customer_id: number;

  /** Número do cliente (obrigatório) */
  number: string;

  /** Nome do cliente (obrigatório) */
  name: string;

  /** Número de contribuinte / VAT (obrigatório) */
  vat: string;

  /** Endereço principal (obrigatório) */
  address: string;

  /** Cidade (obrigatório) */
  city: string;

  /** Código postal (obrigatório) */
  zip_code: string;

  /** Identificador do país (obrigatório) */
  country_id: number;

  /** Email (facultativo) */
  email?: string;

  /** Website (facultativo) */
  website?: string;

  /** Telefone (facultativo) */
  phone?: string;

  /** Fax (facultativo) */
  fax?: string;

  /** Nome do contato (facultativo) */
  contact_name?: string;

  /** Email do contato (facultativo) */
  contact_email?: string;

  /** Telefone do contato (facultativo) */
  contact_phone?: string;

  /** Notas (facultativo) */
  notes?: string;

  /** Identificador do vendedor (facultativo) */
  salesman_id?: number;

  /** Desconto (facultativo) */
  discount?: number;

  /** Limite de crédito (facultativo) */
  credit_limit?: number;

  /** Identificador da data de vencimento (obrigatório) */
  maturity_date_id: number;

  /** Dia de pagamento (facultativo) */
  payment_day?: number;

  /** Observações de campo (facultativo) */
  field_notes?: string;

  /** Identificador do idioma (obrigatório) */
  language_id: number;

  /** Identificador do método de pagamento (obrigatório) */
  payment_method_id: number;

  /** Identificador do método de entrega (obrigatório) */
  delivery_method_id: number;

  /** Informações detalhadas do país */
  country?: {
    country_id: number;
    country: string;
    iso_3166_1: string;
  };

  /** Informações detalhadas do idioma */
  language?: {
    language_id: number;
    code: string;
    name: string;
  };

  /** Informações detalhadas da data de vencimento */
  maturity_date?: {
    maturity_date_id: number;
    name: string;
    days: number;
    associated_discount: number;
  };

  /** Método de pagamento detalhado */
  payment_method?: {
    payment_method_id: number;
    name: string;
  };

  /** Método de entrega detalhado */
  delivery_method?: {
    delivery_method_id: number;
    name: string;
  };

  /** Vendedor detalhado */
  salesman?: {
    salesman_id: number;
    number: string;
    name: string;
    base_commission: number;
  };

  /** Endereços alternativos */
  alternate_addresses?: Array<{
    address_id: number;
    designation: string;
    code: string;
    address: string;
    city: string;
    zip_code: string;
    country_id: number;
    email: string;
    phone: string;
    fax: string;
    contact_name: string;
  }>;

  /** Cópias de documentos */
  copies?: Array<{
    document_type_id: number;
    copies: number;
  }>;

  /** Impostos associados */
  associated_taxes?: Array<{
    tax_id: number;
  }>;

  /** Classe de preço detalhada */
  price_class?: {
    price_class_id: number;
    title: string;
  };

  /** Quantidade de resultados (default: 50, máximo: 50) */
  qty?: number;

  /** Posição inicial (default: 0) */
  offset?: number;
};

export type TMoloni_Customers_Insert_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;

  /** Identificador do cliente (obrigatório) */
  customer_id: number;
};

export type TMoloni_Customers_Update_BodyResponse =
  TMoloni_Customers_Insert_BodyResponse;

export type TMoloni_Customers_Delete_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};
