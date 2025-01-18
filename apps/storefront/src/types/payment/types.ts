import type {
  Payment_Methods as PaymentMethodResponse,
  Payment_Method_Types as PaymentMethodType,
} from "@/gql/graphql";

export type PaymentMethodTypeResponse = Omit<
  PaymentMethodType,
  "created_at" | "updated_at"
> & { createdAt: string; updatedAt: string };
export type PaymentMethodsResponse = Omit<
  PaymentMethodResponse,
  | "payment_method_types"
  | "store"
  | "is_active"
  | "created_at"
  | "updated_at"
  | "payment_method_type"
> & {
  isActive: boolean;
  paymentMethodTypeId: string;
  paymentMethodTypes: PaymentMethodTypeResponse;
  storeId: string;
  createdAt?: string;
  updatedAt?: string;
};
