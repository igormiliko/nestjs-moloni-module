export type TMoloni_DeliveryMethods_Insert_BodyRequest = {
  company_id: number;
  name: string;
};

export type TMoloni_DeliveryMethods_Update_BodyRequest = Partial<
  Omit<TMoloni_DeliveryMethods_Insert_BodyRequest, 'company_id'>
> & {
  delivery_method_id: number;
};

export type TMoloni_DeliveryMethods_Delete_BodyRequest = {
  delivery_method_id: number;
  company_id: number;
};

export type TMoloni_DeliveryMethods_GetAll_BodyRequest = {
  company_id: number;
};

export type TMoloni_DeliveryMethods_Insert_BodyResponse = {
  delivery_method_id: number;
  valid: 1 | 0;
};

export type TMoloni_DeliveryMethods_Update_BodyResponse = {
  delivery_method_id: number;
  valid: 1 | 0;
};

export type TMoloni_DeliveryMethods_Delete_BodyResponse = {
  valid: 1 | 0;
};

export type TMoloni_DeliveryMethods_GetAll_BodyResponse = {
  delivery_method_id: number;
  name: string;
};
