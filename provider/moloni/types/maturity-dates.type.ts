export type TMoloni_MaturityDates_Insert_BodyRequest = {
  company_id: number;
  name: string;
  days: number;
  associated_discount: number;
};

export type TMoloni_MaturityDates_Update_BodyRequest = Partial<
  Omit<TMoloni_MaturityDates_Insert_BodyRequest, 'company_id'>
> & {
  maturity_date_id: number;
};

export type TMoloni_MaturityDates_Delete_BodyRequest = {
  maturity_date_id: number;
  company_id: number;
};

export type TMoloni_MaturityDates_GetAll_BodyRequest = {
  company_id: number;
};

export type TMoloni_MaturityDates_Insert_BodyResponse = {
  maturity_date_id: number;
  valid: 1 | 0;
};

export type TMoloni_MaturityDates_Update_BodyResponse = {
  maturity_date_id: number;
  valid: 1 | 0;
};

export type TMoloni_MaturityDates_Delete_BodyResponse = {
  valid: 1 | 0;
};

export type TMoloni_MaturityDates_GetAll_BodyResponse = {
  maturity_date_id: number;
  name: string;
  days: number;
  associated_discount: number;
};
