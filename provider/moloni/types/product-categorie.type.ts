// ================== PRODUCT_CATEGORIES ======================= //
export type TMoloni_ProductCategories_Insert_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador da categoria pai (obrigatório) */
  parent_id: number;

  /** Nome da categoria (obrigatório) */
  name: string;

  /** Descrição da categoria (facultativo, pode ser string vazia) */
  description?: string;

  /** Ativação no POS (facultativo, pode ser 0 ou 1, default 0) */
  pos_enabled?: number;
};

export type TMoloni_ProductCategories_Update_BodyRequest =
  TMoloni_ProductCategories_Insert_BodyRequest & {
    /** Identificador da categoria pai (obrigatório) */
    category_id: number;
  };

export type TMoloni_ProductCategories_Delete_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;
  /** Identificador da categoria pai (obrigatório) */
  category_id: number;
};

export type TMoloni_ProductCategories_GetAll_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador da categoria pai (obrigatório) */
  parent_id: number;
};

export type TMoloni_ProductCategories_Insert_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;

  /** Identificador da categoria pai (obrigatório) */
  category_id: number;
};

export type TMoloni_ProductCategories_Update_BodyResponse =
  TMoloni_ProductCategories_Insert_BodyResponse;
export type TMoloni_ProductCategories_Delete_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};
export type TMoloni_ProductCategories_GetAll_BodyResponse = {
  /** Identificador da categoria pai (obrigatório) */
  category_id: number;

  /** Identificador da categoria pai (obrigatório) */
  parent_id: number;
    /** Nome da categoria (obrigatório) */
  name: string;

  /** Descrição da categoria (facultativo, pode ser string vazia) */
  description?: string;

  /** Ativação no POS (facultativo, pode ser 0 ou 1, default 0) */
  pos_enabled?: number;

  image: string;
  num_categories: number;
  num_products: number;
};
