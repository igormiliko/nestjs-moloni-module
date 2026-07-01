// Valores aceitos no campo "type"
export type ProductType = 1 | 2 | 3;
// 1: Produto, 2: Serviço, 3: Outros

// Valores aceitos no campo "at_product_category"
export type AtProductCategory = 'M' | 'P' | 'A' | 'S' | 'T';

// Estrutura de impostos
export interface ProductTax {
  tax_id: number; // Obrigatório
  value: number; // Obrigatório
  order: number; // Obrigatório
  cumulative: number; // Obrigatório (0 ou 1)
}

// Estrutura de fornecedores
export interface ProductSupplier {
  supplier_id: number; // Obrigatório
  cost_price: number; // Obrigatório
  reference?: number; // Facultativo
}

// Estrutura de propriedades
export interface ProductProperty {
  property_id: number; // Obrigatório
  value: string; // Obrigatório
}

// Estrutura de armazéns
export interface ProductWarehouse {
  warehouse_id: number; // Obrigatório
  stock: number; // Obrigatório
}

// Parâmetros de paginação (se aplicável)
export interface PaginationParams {
  qty?: number; // default 50, máximo 50
  offset?: number; // default 0
}

// ================== PRODUCT ======================= //
export type TMoloni_Product_Insert_BodyRequest = {
  company_id: number; // Obrigatório
  category_id: number; // Obrigatório
  type: ProductType; // Obrigatório
  price: number; // Obrigatório
  unit_id: number; // Obrigatório
  name: string; // Obrigatório
  reference: string; // Obrigatório (único)
  has_stock: number; // Obrigatório (0 ou 1)
  stock: number; // Obrigatório

  summary?: string; // Facultativo
  ean?: string; // Facultativo
  minimum_stock?: number; // Facultativo
  pos_favorite?: number; // Facultativo
  at_product_category?: AtProductCategory; // Obrigatório se has_stock = 1
  exemption_reason?: string; // Obrigatório em alguns cenários
  taxes?: ProductTax[]; // Facultativo
  suppliers?: ProductSupplier[]; // Facultativo
  properties?: ProductProperty[]; // Facultativo
  warehouses?: ProductWarehouse[]; // Facultativo
};

export type TMoloni_Product_Update_BodyRequest =
  Partial<TMoloni_Product_Insert_BodyRequest> & {
    /** Identificador do produto */
    product_id: number;
  };

export type TMoloni_Product_Delete_BodyRequest = {
  /** Identificador do produto */
  product_id: number;

  /** Identificador da empresa (obrigatório) */
  company_id: number;
};

export type TMoloni_Product_GetAll_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador da categoria (obrigatório) */
  category_id: number;

  /** Quantidade de resultados (facultativo, default: 50, máximo: 50) */
  qty?: number;

  /** Posição inicial (facultativo, default: 0) */
  offset?: number;

  /** Incluir itens invisíveis (facultativo, pode ser 0 ou 1) */
  with_invisible?: number;
};

export type TMoloni_Product_Insert_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;

  /** Identificador do produto */
  product_id: number;
};
export type TMoloni_Product_Update_BodyResponse =
  TMoloni_Product_Insert_BodyResponse;

export type TMoloni_Product_Delete_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};

export type TMoloni_Product_GetAll_BodyResponse = TMoloni_Product_Update_BodyRequest;
