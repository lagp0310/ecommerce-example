import { gql } from "@apollo/client";
import { categoryFragment } from "../../fragments/category/fragments";

export const allCategories = (params: string) => gql`
  query AllCategories($cursor: Cursor) {
    categoriesCollection(${params}) {
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
