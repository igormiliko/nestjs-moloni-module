export type TMoloni_Currencies_GetAll_BodyRequest = null;
export type TMoloni_Currencies_GetAll_BodyResponse = {
  currency_id: number;
  symbol: string;
  iso4217: string;
  languages: {
    currency_id: number;
    language_id: number;
    name: string;
  }[];
};

export type TMoloni_Countries_GetAll_BodyRequest = null;
export type TMoloni_Countries_GetAll_BodyResponse = {
  country_id: number;
  iso_3166_1: string;
  image: string;
  vies_vat_check_available: number;
  languages: {
    currency_id: number;
    language_id: number;
    name: string;
  }[];
  fiscal_zones: TMoloni_FiscalZones_GetAll_BodyResponse &
    {
      fiscal_zone_id: number;
    }[];
};

export type TMoloni_Companies_GetAll_BodyRequest = null;
export type TMoloni_Companies_GetAll_BodyResponse = {
  company_id: number;
  name: string;
  email: string;
  vat: string;
  address: string;
  city: string;
  zip_code: string;
  country_id: number;
  image: string;
  country: {
    country_id: number;
    iso_3166_1: string;
    name: string;
  };
};

export type TMoloni_FiscalZones_GetAll_BodyRequest = {
  country_id: number;
};
export type TMoloni_FiscalZones_GetAll_BodyResponse = {
  country_id: number;
  name: string;
  code: string;
};

export type TMoloni_Languages_GetAll_BodyRequest = null;
export type TMoloni_Languages_GetAll_BodyResponse = {
  language_id: number;
  code: string;
  title: string;
};
