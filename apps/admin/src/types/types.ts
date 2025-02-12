import { BaseKey } from "@refinedev/core";

export enum Month {
  JANUARY = 1,
  FEBRUARY = 2,
  MARCH = 3,
  APRIL = 4,
  MAY = 5,
  JUNE = 6,
  JULY = 7,
  AUGUST = 8,
  SEPTEMBER = 9,
  OCTOBER = 10,
  NOVEMBER = 11,
  DECEMBER = 12,
}

export type DashboardOrder = {
  first_name: string;
  last_name: string;
  email: string;
  result_orders_total: number;
};

export type OrderSummary = {
  result_month_number: number;
  result_month_name: string;
  total_orders: number;
  orders_total: number;
};

export type DashboardDataResponse = {
  result_orders_total?: number;
  result_total_orders?: number;
  lm_orders_total?: number;
  lm_total_orders?: number;
  result_customers_count?: number;
  lm_customers_count?: number;
  orders_amount_difference_percentage?: number;
  is_orders_amount_percentage_positive?: boolean;
  orders_difference_percentage?: number;
  is_orders_percentage_positive?: boolean;
  customers_difference_percentage?: number;
  is_customers_difference_percentage_positive?: boolean;
};

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

export type Category = {
  id: BaseKey;
  name: string;
  description?: string;
};

export type ProductTag = {
  id: BaseKey;
  tag: string;
  type?: { type?: string };
};
