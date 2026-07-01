export type TMoloni_PaymentMethods_Insert_BodyRequest = {
  company_id: number;
  name: string;
  is_numerary: number;
  is_mb: number;
  is_credit: number;
};

export type TMoloni_PaymentMethods_Update_BodyRequest = Partial<
  Omit<TMoloni_PaymentMethods_Insert_BodyRequest, 'company_id'>
> & {
  payment_method_id: number;
};

export type TMoloni_PaymentMethods_Delete_BodyRequest = {
  company_id: number; // Obrigatório
  payment_method_id: number;
};

export type TMoloni_PaymentMethods_GetAll_BodyRequest = {
  company_id: number; // Obrigatório
};

export type TMoloni_PaymentMethods_Insert_BodyResponse = {
  payment_method_id: number;
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};

export type TMoloni_PaymentMethods_Update_BodyResponse =
  TMoloni_PaymentMethods_Insert_BodyResponse;

export type TMoloni_PaymentMethods_Delete_BodyResponse = {
  /** Indica se a operação foi válida (1) ou não (0) */
  valid: 1 | 0;
};

export type TMoloni_PaymentMethods_GetAll_BodyResponse = {
  payment_method_id: number;
  name: string;
  is_numerary: number;
};
