import { gql } from "@apollo/client";
import { imageBannerFragment } from "@/gql/fragments/image-banner/fragments";

export const allImageBanners = gql`
  query AllImageBanners(
    $first: Int
    $last: Int
    $before: Cursor
    $after: Cursor
    $offset: Int
    $filter: image_bannersFilter
    $orderBy: [image_bannersOrderBy!]
  ) {
    imageBannersCollection: image_bannersCollection(
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
          ...ImageBannerFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${imageBannerFragment}
`;
