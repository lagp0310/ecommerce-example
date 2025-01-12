import { cartAddressFragment } from "@/gql/fragments/cart-address/fragments";
import { gql } from "@apollo/client";

export const createCartAddress = gql`
  mutation CreateCartAddress($cartAddresses: [cart_addressInsertInput!]!) {
    insertIntoCartAddressCollection: insertIntocart_addressCollection(
      objects: $cartAddresses
    ) {
      __typename
      affectedCount
      records {
        ...CartAddressFragment
      }
    }
  }
  ${cartAddressFragment}
`;

export const updateCartAddress = gql`
  mutation UpdateCartAddress(
    $cartAddress: cart_addressUpdateInput!
    $filter: cart_addressFilter
  ) {
    updateCartAddressCollection: updatecart_addressCollection(
      set: $cartAddress
      filter: $filter
    ) {
      __typename
      affectedCount
      records {
        ...CartAddressFragment
      }
    }
  }
  ${cartAddressFragment}
`;

export const deleteCartAddress = gql`
  mutation DeleteCartAddress($filter: cart_addressFilter) {
    deleteFromCartAddressCollection: deleteFromcart_addressCollection(
      filter: $filter
    ) {
      affectedCount
      records {
        ...CartAddressFragment
      }
    }
  }
  ${cartAddressFragment}
`;
