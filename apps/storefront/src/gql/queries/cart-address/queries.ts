import { cartAddressFragment } from "@/gql/fragments/cart-address/fragments";
import { gql } from "@apollo/client";

export const allCartAddresses = gql`
  query AllCartAddresses(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: cart_addressFilter
    $orderBy: [cart_addressOrderBy!]
  ) {
    cartAddressCollection: cart_addressCollection(
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
          ...CartAddressFragment
        }
      }
    }
  }
  ${cartAddressFragment}
`;
