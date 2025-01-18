import { gql } from "@apollo/client";
import { lineItemFragment } from "@/gql/fragments/line-item/fragments";

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
    lineItemsCollection: line_itemsCollection(orderBy: $lineItemsOrderBy) {
      edges {
        node {
          ...LineItemFragment
        }
      }
    }
    createdAt: created_at
    updatedAt: updated_at
  }
  ${lineItemFragment}
`;
