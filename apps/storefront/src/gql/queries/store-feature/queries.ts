import { gql } from "@apollo/client";
import { storeFeatureFragment } from "@/gql/fragments/store-feature/fragments";

export const allStoreFeatures = (params: string) => gql`
  query AllStoreFeatures($cursor: Cursor) {
    store_featuresCollection(${params}) {
      edges {
        node {
          ...StoreFeatureFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${storeFeatureFragment}
`;
