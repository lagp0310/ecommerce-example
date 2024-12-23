import { gql } from "@apollo/client";

export const cartFragment = gql`
  fragment CartFragment on carts {
    id
    anonymousId: anonymous_id
    createdAt: created_at
    updatedAt: updated_at
    customers {
      id
      firstName: first_name
      lastName: last_name
      billingAddress: billing_address
      shippingAddress: shipping_address
    }
    stores {
      id
      name
    }
    currencies {
      id
      currencyCode: three_letter_code
      symbol
    }
  }
`;
