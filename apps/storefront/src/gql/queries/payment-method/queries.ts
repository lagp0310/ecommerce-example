import { gql } from "@apollo/client";
import { paymentMethodFragment } from "@/gql/fragments/payment-method/fragments";

export const allPaymentMethods = gql`
  query AllPaymentMethods(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: payment_methodsFilter
    $orderBy: [payment_methodsOrderBy!]
  ) {
    paymentMethodsCollection: payment_methodsCollection(
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
          ...PaymentMethodFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${paymentMethodFragment}
`;
