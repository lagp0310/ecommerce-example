import { gql } from "@apollo/client";

export const createLineItems = gql`
  mutation CreateLineItems($lineItems: [line_itemsInsertInput!]!) {
    insertIntoline_itemsCollection(objects: $lineItems) {
      __typename
      affectedCount
      records {
        id
        quantity
        comment
        products
        price
      }
    }
  }
`;
