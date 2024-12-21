import { lineItemFragment } from "@/gql/fragments/line-item/fragments";
import { gql } from "@apollo/client";

export const createLineItems = gql`
  mutation CreateLineItems($lineItems: [line_itemsInsertInput!]!) {
    insertIntoLineItemsCollection: insertIntoline_itemsCollection(
      objects: $lineItems
    ) {
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
    updateLineItemsCollection: updateline_itemsCollection(
      set: $lineItems
      filter: $filter
    ) {
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
    deleteFromLineItemsCollection: deleteFromline_itemsCollection(
      filter: $filter
    ) {
      __typename
      affectedCount
      records {
        ...LineItemFragment
      }
    }
  }
  ${lineItemFragment}
`;
