import { gql } from "@apollo/client";

export const cartAddressFragment = gql`
  fragment CartAddressFragment on cart_address {
    id
    cartId: cart
    addressId: address
    addressTypeId: address_type
    createdAt: created_at
    updatedAt: updated_at
  }
`;
