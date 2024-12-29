import { gql } from "@apollo/client";
import { paymentMethodTypeFragment } from "@/gql/fragments/payment-method-type/fragments";

export const paymentMethodFragment = gql`
  fragment PaymentMethodFragment on payment_methods {
    id
    storeId: store
    isActive: is_active
    paymentMethodTypeId: payment_method_type
    paymentMethodTypes: payment_method_types {
      ...PaymentMethodTypeFragment
    }
    createdAt: created_at
    updatedAt: updated_at
  }
  ${paymentMethodTypeFragment}
`;
