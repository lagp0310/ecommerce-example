import { gql } from "@apollo/client";

export const allCategories = (params: string) => gql`
    query AllCategories($cursor: Cursor) {
      categoriesCollection(${params}) {
        edges {
          node {
            id
            name
            imageUrl: image_url
            storeId: store
            createdAt: created_at
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;
