import type { Customers as Customer } from "@/gql/graphql";
import { CustomerAddressesCollection } from "@/types/customer-address/types";

export type CustomerTestimonial = {
  id: string;
  text: string;
  avatarUrl: string;
  rating: number;
  fullName: string;
};

export type CustomerResponse = Omit<
  Customer,
  | "customer_addressesCollection"
  | "birth_date"
  | "created_at"
  | "first_name"
  | "last_name"
  | "updated_at"
> & {
  customerAddresses?: { edges: CustomerAddressesCollection[] };
  birthDate?: string;
  createdAt?: string;
  firstName: string;
  lastName: string;
  updatedAt?: string;
};
