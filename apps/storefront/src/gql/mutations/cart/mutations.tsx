import { lineItemFragment } from "@/gql/fragments/line-item/fragments";
import { gql } from "@apollo/client";

export const createCart = gql`
  mutation CreateCart($carts: [cartsInsertInput!]!) {
    insertIntoCartsCollection: insertIntocartsCollection(objects: $carts) {
      __typename
      affectedCount
      records {
        id
        lineItemsCollection: line_itemsCollection {
          edges {
            node {
              ...LineItemFragment
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
  ${lineItemFragment}
`;

export const updateCart = gql`
  mutation UpdateCart($cart: cartsUpdateInput!, $filter: cartsFilter) {
    updateCartsCollection: updatecartsCollection(set: $cart, filter: $filter) {
      __typename
      affectedCount
      records {
        id
        lineItemsCollection: line_itemsCollection {
          edges {
            node {
              ...LineItemFragment
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
  ${lineItemFragment}
`;
