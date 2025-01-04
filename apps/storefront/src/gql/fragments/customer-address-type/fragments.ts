import { gql } from "@apollo/client";

export const customerAddressTypeFragment = gql`
  fragment CustomerAddressTypeFragment on customer_address_types {
    id
    type
    createdAt: created_at
    updatedAt: updated_at
  }
`;
