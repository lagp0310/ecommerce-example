import { gql } from "@apollo/client";

export const cartFragment = gql`
  fragment CartFragment on carts {
    id
    anonymous_id
    created_at
    updated_at
    customers {
      id
      first_name
      last_name
      billing_address
      shipping_address
    }
    stores {
      id
      name
    }
    currencies {
      id
      three_letter_code
      symbol
    }
  }
`;
