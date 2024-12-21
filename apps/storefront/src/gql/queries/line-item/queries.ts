import { gql } from "@apollo/client";
import { lineItemFragment } from "@/gql/fragments/line-item/fragments";

export const allLineItems = gql`
  query AllLineItems($filter: line_itemsFilter) {
    lineItemsCollection: line_itemsCollection(filter: $filter) {
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
  ${lineItemFragment}
`;
