import { gql } from "@apollo/client";

export const allStoreFeatures = (params: string) => gql`
    query AllStoreFeatures($cursor: Cursor) {
      store_featuresCollection(${params}) {
        edges {
          node {
            id
            title
            description
            iconName: icon_name
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
