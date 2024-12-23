import { gql } from "@apollo/client";
import { storeFeatureFragment } from "@/gql/fragments/store-feature/fragments";

export const allStoreFeatures = gql`
  query AllStoreFeatures(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: store_featuresFilter
    $orderBy: [store_featuresOrderBy!]
  ) {
    storeFeaturesCollection: store_featuresCollection(
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
