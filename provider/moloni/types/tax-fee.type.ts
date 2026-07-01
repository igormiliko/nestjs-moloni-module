// ================== TAXES ======================= //
export type TMoloni_TaxFee_Insert_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Nome da taxa/imposto (obrigatório) */
  name: string;

  /** Valor da taxa/imposto (obrigatório) */
  value: number;

  /** Tipo da taxa:
   * 1: Percentagem (Ex.: IVA)
   * 2: Valor monetário fixo independente do artigo (Ex: Selo fiscal)
   * 3: Valor monetário depende do artigo (Ex.: Eco taxa)
   */
  type: 1 | 2 | 3;

  /** Tipo SAFT:
   * 1: Valor adicionado (IVA)
   * 2: Imposto direto (Imposto de Selo)
   * 3: Nenhum dos dois casos anteriores
   */
  saft_type: 1 | 2 | 3;

  /** Zona fiscal (obrigatório) */
  fiscal_zone: string;

  /** Ativo por padrão (obrigatório, 0 ou 1) */
  active_by_default: number;

  /** Tipo de IVA, obrigatório se saft_type = 1:
   * RED, INT, NOR, ISE, OUT
   */
  vat_type?: 'RED' | 'INT' | 'NOR' | 'ISE' | 'OUT';

  /** Tipo de selo, obrigatório se saft_type = 2 */
  stamp_type?: string;

  /** Motivo de isenção, obrigatório se o valor da taxa for 0 */
  exemption_reason?: string;

  /** Quantidade de resultados (facultativo, default: 50, máximo: 50) */
  qty?: number;

  /** Posição inicial (facultativo, default: 0) */
  offset?: number;
};

export type TMoloni_TaxFee_Update_BodyRequest =
  Partial<TMoloni_TaxFee_Insert_BodyRequest> & {
    tax_id: number; // Obrigatório
  };

export type TMoloni_TaxFee_Delete_BodyRequest = {
  tax_id: number; // Obrigatório

  /** Identificador da empresa (obrigatório) */
  company_id: number;
};

export type TMoloni_TaxFee_GetAll_BodyRequest = {
  /** Identificador da empresa (obrigatório) */
  company_id: number;

  /** Identificador do país (facultativo) */
  country_id?: number;

  /** Zona fiscal (facultativo) */
  fiscal_zone?: string;

  /** Valor (facultativo) */
  value?: number;

  /** Tipo (facultativo) */
  type?: number;

  /** Ativo por padrão (facultativo) */
  active_by_default?: number;

  /** Incluir invisíveis (facultativo) */
  with_invisible?: number;

  /** Quantidade de resultados (default: 50, máximo: 50) */
  qty?: number;

  /** Posição inicial (default: 0) */
  offset?: number;
};
export type TMoloni_TaxFee_Insert_BodyResponse = {
  tax_id: number; // Obrigatório
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};
export type TMoloni_TaxFee_Update_BodyResponse =
  TMoloni_TaxFee_Insert_BodyResponse;

export type TMoloni_TaxFee_Delete_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};

export type TMoloni_TaxFee_GetAll_BodyResponse =
  TMoloni_TaxFee_Update_BodyRequest;
