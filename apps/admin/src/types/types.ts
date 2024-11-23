import { BaseKey } from "@refinedev/core";

export type ValidateFieldsResponse<Resource> = {
  values: Omit<Resource, "id">;
  errorFields: { errors: string[]; name: string[]; warnings: string[] }[];
  outOtDate: boolean;
};
export type FormValues<Resource> = Omit<Resource, "id">;

export type Currency = {
  id: BaseKey;
  name: string;
  three_letter_code: string;
  numeric_id: string;
};

export type Business = {
  id: BaseKey;
  name: string;
  description?: string;
  business_currencies: string[];
  business_currency?: { id: string; currency: Currency }[];
};

export type Customer = {
  id: BaseKey;
  first_name: string;
  last_name: string;
  email: string;
  emails?: { email: string }[];
  phone_number: string;
  phone_numbers?: { phone_number: string }[];
  birth_date?: string;
  billing_address: string;
  shipping_address: string;
};

export type Store = {
  id: BaseKey;
  name: string;
  description?: string;
  business: Business;
};

export type Product = {
  id: BaseKey;
  name: string;
  description?: string;
  price: number;
  discounted_price?: number;
  discounted_until?: string;
  currency: Currency;
  rating?: number;
  sku: string;
  store: Store;
  available_quantity?: string;
};

export type LineItem = {
  id: BaseKey;
  cart: string;
  quantity?: number;
  comment?: string;
  products?: Product;
};
