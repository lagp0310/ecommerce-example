import { gql } from "@apollo/client";
import { categoryFragment } from "../../fragments/category/fragments";

export const allCategories = gql`
  query AllCategories(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: categoriesFilter
    $orderBy: [categoriesOrderBy!]
  ) {
    categoriesCollection(
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
          ...CategoryFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${categoryFragment}
`;
