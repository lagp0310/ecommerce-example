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
  ) {
    cartsCollection(filter: $filter) {
      edges {
        node {
          ...CartFragment
        }
      }
    }
  }
  ${cartFragment}
`;
