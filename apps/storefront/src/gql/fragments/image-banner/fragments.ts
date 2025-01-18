import { gql } from "@apollo/client";

export const imageBannerFragment = gql`
  fragment ImageBannerFragment on image_banners {
    id
    title
    header
    headerRemark: header_remark
    description
    ctaText: cta_text
    ctaUrl: cta_url
    imageUrl: image_url
    bannerType: banner_types {
      id
      type
      description
    }
  }
`;
