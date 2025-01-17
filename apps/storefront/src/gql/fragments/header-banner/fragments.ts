import { gql } from "@apollo/client";

export const headerBannerFragment = gql`
  fragment HeaderBannerFragment on header_banners {
    id
    title
    description
    ctaText: cta_text
    ctaUrl: cta_url
    subtitle
    subtitleRemark: subtitle_remark
    subtitleComplement: subtitle_complement
    imageUrl: image_url
    bannerType: banner_types {
      id
      type
      description
    }
  }
`;
