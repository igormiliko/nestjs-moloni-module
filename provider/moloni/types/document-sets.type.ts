export type TMoloni_DocumentSets_Insert_BodyRequest = {
  company_id: number;
  name: string;
  cash_vat_scheme_indicator: number;
  active_by_default: number;
  template_id: number;
};

export type TMoloni_DocumentSets_Insert_BodyResponse = {
  valid: 1 | 0;
  document_set_id: number;
};

export type TMoloni_DocumentSets_Update_BodyRequest = Partial<
  Omit<TMoloni_DocumentSets_Insert_BodyRequest, 'company_id'>
> & {
  document_set_id: number;
};

export type TMoloni_DocumentSets_Update_BodyResponse =
  TMoloni_DocumentSets_Insert_BodyResponse;

export type TMoloni_DocumentSets_GetAll_BodyRequest = {
  company_id: number;
};

export type TMoloni_DocumentSets_GetAll_BodyResponse = {
  document_set_id: number;
  name: string;
  cash_vat_scheme_indicator: number;
  active_by_default: number;
  template_id: number;
  img_gr_1: string;
};

export type TMoloni_DocumentSets_Delete_BodyResponse = {
  company_id: number;
  document_set_id: number;
};
export type TMoloni_DocumentSets_Delete_BodyRequest = {
  valid: 1 | 0;
};
