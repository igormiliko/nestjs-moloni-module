export type TMoloniMBReference = {
  /** Entidade do MB */
  entity: string;

  /** Referência MB */
  reference: string;

  /** Valor associado */
  value: string;
};

export type TMoloniInvoiceChildProduct = {
  /** Identificador do produto filho (obrigatório) */
  product_id: number;

  /** Nome do produto filho (obrigatório) */
  name: string;

  /** Resumo do produto */
  summary?: string;

  /** Quantidade do produto filho (obrigatório) */
  qty: number;

  /** Preço do produto filho (obrigatório) */
  price: number;

  /** Desconto aplicado */
  discount?: number;

  /** Identificador de dedução */
  deduction_id?: number;

  /** Ordem do produto */
  order?: number;

  /** Identificador de origem */
  origin_id?: number;

  /** Motivo de isenção */
  exemption_reason?: string;

  /** Identificador do armazém */
  warehouse_id?: number;

  /** Propriedades adicionais */
  properties?: Array<{
    title: string;
    value: string;
  }>;

  /** Impostos aplicados ao produto */
  taxes?: Array<{
    tax_id: number;
    value: number;
    order?: number;
    cumulative?: number;
  }>;
};

export type TMoloniInvoiceProductWithChildren = TMoloniInvoiceChildProduct & {
  /** Produtos filhos */
  child_products?: TMoloniInvoiceChildProduct[];
};

// ================== INVOICES ======================= //
export type TMoloni_Invoices_Insert_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Data do documento (obrigatório) */
  date: string | number;

  /** Data de expiração (obrigatório) */
  expiration_date: string | number;

  /** Identificador da série documental (obrigatório) */
  document_set_id: number;

  /** Identificador do cliente (obrigatório) */
  customer_id: number;

  /** Identificador do documento associado (obrigatório) */
  associated_id: number;

  /** Valor total do documento (obrigatório) */
  value: number;

  /** Lista de produtos com possíveis produtos filhos (obrigatório) */
  products: TMoloniInvoiceProductWithChildren[];

  /** Endereço alternativo */
  alternate_address_id?: number;

  /** Identificador da maturidade */
  maturity_date_id?: number;

  /** Referência externa */
  our_reference?: string;

  /** Referência interna */
  your_reference?: string;

  /** Desconto financeiro */
  financial_discount?: number;

  /** Identificador EAC */
  eac_id?: number;

  /** Identificador do vendedor */
  salesman_id?: number;

  /** Comissão do vendedor */
  salesman_commission?: number;

  /** Desconto especial */
  special_discount?: number;

  /** Documentos associados */
  associated_documents?: any[];

  /** Notas relacionadas a documentos */
  related_documents_notes?: string;

  /** Método de entrega */
  delivery_method_id?: number;

  /** Data e hora da entrega */
  delivery_datetime?: string | number;

  /** Endereço de partida da entrega */
  delivery_departure_address?: string;
  delivery_departure_city?: string;
  delivery_departure_zip_code?: string;
  delivery_departure_country?: number;

  /** Endereço de destino da entrega */
  delivery_destination_address?: string;
  delivery_destination_city?: string;
  delivery_destination_zip_code?: string;
  delivery_destination_country?: number;

  /** Veículo */
  vehicle_id?: number;
  vehicle_name?: string;
  vehicle_number_plate?: string;

  /** Observações gerais */
  notes?: string;

  /** Status do documento */
  status?: number;

  /** Gerar referência MB */
  generate_mb_reference?: number;

  /** Posição inicial (default: 0) */
  offset?: number;

  /** Quantidade de resultados (default: 50, máximo 50) */
  qty?: number;
};

// Tipo para update: todos os campos opcionais, exceto IDs obrigatórios
export type TMoloni_Invoices_Update_BodyRequest = Partial<
  Omit<TMoloni_Invoices_Insert_BodyRequest, 'company_id' | 'document_id'>
> & {
  company_id: number;
  document_id: number;
};

export type TMoloni_Invoices_Delete_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador do documento */
  document_id?: number | string;
};

export type TMoloni_Invoices_GetAll_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador do documento */
  document_id?: number | string;

  /** Identificador do cliente */
  customer_id?: number | string;

  /** Identificador do fornecedor */
  supplier_id?: number | string;

  /** Identificador do vendedor */
  salesman_id?: number | string;

  /** Identificador da série documental */
  document_set_id?: number | string;

  /** Número do documento */
  number?: number | string;

  /** Data do documento (timestamp ou string) */
  date?: number | string;

  /** Data de expiração (timestamp ou string) */
  expiration_date?: number | string;

  /** Ano do documento */
  year?: number | string;

  /** Referência interna */
  your_reference?: number | string;

  /** Referência externa */
  our_reference?: number | string;

  /** Quantidade de resultados (default: 50, máximo: 50) */
  qty?: number;

  /** Posição inicial (default: 0) */
  offset?: number;
};

// ========= RESPONSES =================

export type TMoloniCurrency = {
  currency_id: number;
  iso4217: string;
  symbol: string;
};

export type TMoloniDocumentType = {
  document_type_id: number;
  saft_code: string;
};

export type TMoloniDocumentSet = {
  document_set_id: number;
  name: string;
};

export type TMoloniInvoiceResponseItem = {
  /** Identificador do documento */
  document_id: number;

  /** Tipo do documento */
  document_type_id: number;

  /** Série documental */
  document_set_id: number;

  /** Número do documento */
  number: number;

  /** Data do documento */
  date: string | number;

  /** Data de expiração */
  expiration_date: string | number | null;

  /** Identificador da maturidade */
  maturity_date_id: number;

  /** Dias da maturidade */
  maturity_date_days: number;

  /** Nome da maturidade */
  maturity_date_name: string;

  /** Referência interna */
  your_reference?: string;

  /** Referência externa */
  our_reference?: string;

  /** Informações da entidade (cliente/fornecedor) */
  entity_number: string;
  entity_name: string;
  entity_vat: string;
  entity_address: string;

  /** Valores do documento */
  gross_value: number;
  comercial_discount_value: number;
  financial_discount_value: number;
  taxes_value: number;
  deduction_value: number;
  net_value: number;

  /** Status do documento */
  status: number;

  /** Transporte */
  transport_code?: string;
  transport_code_set_by?: number;

  /** Moeda e câmbio */
  exchange_currency_id?: number;
  exchange_total_value?: number;
  exchange_rate?: number;
  exchange_currency?: TMoloniCurrency;

  /** Tipos e sets */
  document_type?: TMoloniDocumentType;
  document_set?: TMoloniDocumentSet;
};

// Resposta completa: lista de documentos
export type TMoloni_Invoices_GetAll_BodyResponse = TMoloniInvoiceResponseItem[];

export type TMoloni_Invoices_Insert_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;

  /** Identificador do documento associado */
  document_id: number;

  /** Referência MB gerada */
  mb_reference: TMoloniMBReference;
};

export type TMoloni_Invoices_Update_BodyResponse = Partial<
  Omit<TMoloni_Invoices_Insert_BodyResponse, 'document_id'>
>;

export type TMoloni_Invoices_Delete_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};
