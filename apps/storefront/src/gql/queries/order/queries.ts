import { orderFragment } from "@/gql/fragments/order/fragments";
import { gql } from "@apollo/client";

export const getOrder = gql`
  query GetOrder(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: ordersFilter
    $orderBy: [ordersOrderBy!]
  ) {
    ordersCollection(
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
          ...OrderFragment
        }
      }
    }
  }
  ${orderFragment}
`;
