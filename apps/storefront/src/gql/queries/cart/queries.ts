import { cartFragment } from "@/gql/fragments/cart/fragments";
import { gql } from "@apollo/client";

export const getCart = gql`
  query GetCart(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: cartsFilter
    $orderBy: [cartsOrderBy!]
    $lineItemsOrderBy: [line_itemsOrderBy!]
  ) {
    cartsCollection(
      first: $first
      last: $last
      before: $before
      after: $after
      offset: $offset
      filter: $filter
      orderBy: $orderBy
    ) {
      edges {
        node {
          ...CartFragment
        }
      }
    }
  }
  ${cartFragment}
`;
