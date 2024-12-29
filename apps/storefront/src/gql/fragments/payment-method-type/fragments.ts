import { gql } from "@apollo/client";

export const paymentMethodTypeFragment = gql`
  fragment PaymentMethodTypeFragment on payment_method_types {
    id
    type
    description
  }
`;
