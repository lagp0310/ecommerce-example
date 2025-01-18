import { orderFragment } from "@/gql/fragments/order/fragments";
import { gql } from "@apollo/client";

export const createOrder = gql`
  mutation CreateOrder($orders: [ordersInsertInput!]!) {
    insertIntoOrdersCollection: insertIntoordersCollection(objects: $orders) {
      __typename
      affectedCount
      records {
        ...OrderFragment
      }
    }
  }
  ${orderFragment}
`;
