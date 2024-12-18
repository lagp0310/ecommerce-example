import { lineItemFragment } from "@/gql/fragments/line-items/fragments";
import { gql } from "@apollo/client";

export const createCart = gql`
  mutation CreateCart($cart: [cartsInsertInput!]!) {
    insertIntocartsCollection(objects: $cart) {
      __typename
      affectedCount
      records {
        id
        line_itemsCollection {
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
    updatecartsCollection(set: $cart, filter: $filter) {
      __typename
      affectedCount
      records {
        id
        line_itemsCollection {
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
