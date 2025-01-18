import type {
  Customer_Address_Types as CustomerAddressType,
  Customer_Addresses as CustomerAddress,
  Country_States as CountryState,
  Customer_AddressesEdge as CustomerAddressEdge,
  Cart_Address as CartAddress,
  Cart_AddressInsertResponse as CartAddressInsertResult,
  Cart_AddressDeleteResponse as CartAddressDeleteResult,
  Customer_AddressesInsertResponse as CustomerAddressInsertResult,
  Customer_AddressesUpdateResponse as CustomerAddressUpdateResult,
} from "@/gql/graphql";

export type AddressTypesResponse = Omit<
  CustomerAddressType,
  "created_at" | "updated_at"
> & { createdAt?: string; updatedAt?: string };

export type CountryStateResponse = Omit<
  CountryState,
  "created_at" | "short_name" | "updated_at"
> & { createdAt?: string; shortName: string; updatedAt?: string };

export type CustomerAddressResponse = Omit<
  CustomerAddress,
  | "address_type"
  | "company_name"
  | "country_state"
  | "country_states"
  | "created_at"
  | "customer_address_types"
  | "first_name"
  | "last_name"
  | "phone_number"
  | "street_address"
  | "updated_at"
  | "zip_code"
> & {
  addressType: string;
  companyName?: string;
  countryState: string;
  countryStates?: CountryStateResponse;
  createdAt?: string;
  customerAddressTypes?: AddressTypesResponse;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  streetAddress: string;
  updatedAt?: string;
  zipCode: string;
};

export type AddressInsertIntoResponse = Omit<
  CustomerAddressInsertResult,
  "records"
> & { records: CustomerAddressResponse };

export type AddressUpdateFromResponse = Omit<
  CustomerAddressUpdateResult,
  "records"
> & { records: CustomerAddressResponse };

export type FormCustomerAddressResponse = Omit<
  CustomerAddressResponse,
  | "countryState"
  | "countryStates"
  | "createdAt"
  | "customerAddressTypes"
  | "updatedAt"
> & {
  countryStateId: string;
  countryId: string;
  customerId: string;
};

export type CustomerAddressesCollection = Omit<CustomerAddressEdge, "node"> & {
  node: CustomerAddressResponse;
};

export type CartAddressResponse = (Omit<
  CartAddress,
  "address_type" | "created_at" | "updated_at"
> & {
  addressId: string;
  addressTypeId: string;
  cartId: string;
  createdAt?: string;
  updatedAt?: string;
})[];

export type CartAddressDeleteResponse = Omit<
  CartAddressDeleteResult,
  "records"
> & {
  records: CartAddressResponse[];
};

export type CartAddressInsertResponse = Omit<
  CartAddressInsertResult,
  "records"
> & {
  records: CartAddressResponse;
};
