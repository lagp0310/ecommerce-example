import { gql } from "@apollo/client";
import { lineItemFragment } from "@/gql/fragments/line-item/fragments";

export const allLineItems = gql`
  query AllLineItems(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: line_itemsFilter
    $orderBy: [line_itemsOrderBy!]
  ) {
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
