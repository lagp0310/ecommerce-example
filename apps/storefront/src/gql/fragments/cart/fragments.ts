import { gql } from "@apollo/client";

export const cartFragment = gql`
  fragment CartFragment on carts {
    id
    anonymousId: anonymous_id
    stores {
      id
      name
    }
    currencies {
      id
      currencyCode: three_letter_code
      symbol
    }
    createdAt: created_at
    updatedAt: updated_at
  }
`;
