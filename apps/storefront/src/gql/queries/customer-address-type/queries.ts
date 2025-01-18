import { customerAddressTypeFragment } from "@/gql/fragments/customer-address-type/fragments";
import { gql } from "@apollo/client";

export const allCustomerAddressTypes = gql`
  query AllCustomerAddressTypes(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: customer_address_typesFilter
    $orderBy: [customer_address_typesOrderBy!]
  ) {
    customerAddressTypesCollection: customer_address_typesCollection(
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
          ...CustomerAddressTypeFragment
        }
      }
    }
  }
  ${customerAddressTypeFragment}
`;
