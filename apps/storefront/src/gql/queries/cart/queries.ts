import { cartFragment } from "@/gql/fragments/cart/fragments";
import { gql } from "@apollo/client";

export const getCart = gql`
  query GetCart($filter: cartsFilter) {
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
