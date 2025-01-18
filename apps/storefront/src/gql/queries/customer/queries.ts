import { customerFragment } from "@/gql/fragments/customer/fragments";
import { gql } from "@apollo/client";

export const getCustomer = gql`
  query GetCustomer(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: customersFilter
    $orderBy: [customersOrderBy!]
  ) {
    customersCollection(
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
          ...CustomerFragment
        }
      }
    }
  }
  ${customerFragment}
`;
