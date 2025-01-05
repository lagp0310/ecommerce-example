import { customerAddressFragment } from "@/gql/fragments/customer-address/fragments";
import { gql } from "@apollo/client";

export const allCustomerAddresses = gql`
  query AllCustomerAddresses(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: customer_addressesFilter
    $orderBy: [customer_addressesOrderBy!]
  ) {
    customerAddressesCollection: customer_addressesCollection(
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
          ...CustomerAddressFragment
        }
      }
    }
  }
  ${customerAddressFragment}
`;
