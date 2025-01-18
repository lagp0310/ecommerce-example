import { gql } from "@apollo/client";

export const offerBannerFragment = gql`
  fragment OfferBannerFragment on offer_banners {
    id
    title
    header
    ctaText: cta_text
    ctaUrl: cta_url
    subtitle
    subtitleRemark: subtitle_remark
    validUntil: valid_until
    imageUrl: image_url
    bannerType: banner_types {
      id
      type
      description
    }
  }
`;
