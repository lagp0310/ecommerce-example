import { lineItemFragment } from "@/gql/fragments/line-item/fragments";
import { gql } from "@apollo/client";

export const createLineItems = gql`
  mutation CreateLineItems($lineItems: [line_itemsInsertInput!]!) {
    insertIntoline_itemsCollection(objects: $lineItems) {
      __typename
      affectedCount
      records {
        ...LineItemFragment
      }
    }
  }
  ${lineItemFragment}
`;

export const updateLineItems = gql`
  mutation UpdateLineItems(
    $lineItems: line_itemsUpdateInput!
    $filter: line_itemsFilter
  ) {
    updateline_itemsCollection(set: $lineItems, filter: $filter) {
      __typename
      affectedCount
      records {
        ...LineItemFragment
      }
    }
  }
  ${lineItemFragment}
`;

export const deleteLineItems = gql`
  mutation DeleteLineItems($filter: line_itemsFilter) {
    deleteFromline_itemsCollection(filter: $filter) {
      __typename
      affectedCount
      records {
        records {
          ...LineItemFragment
        }
      }
    }
  }
  ${lineItemFragment}
`;
