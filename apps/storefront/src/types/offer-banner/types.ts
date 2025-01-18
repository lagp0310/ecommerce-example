import type { Offer_Banners as OfferBanner } from "@/gql/graphql";
import { BannerTypeResponse } from "@/types/banner-type/types";

export type OfferBannerResponse = Omit<
  OfferBanner,
  | "banner_type"
  | "cta_text"
  | "cta_url"
  | "image_url"
  | "subtitle_remark"
  | "valid_until"
  | "banner_types"
  | "created_at"
  | "updated_at"
> & {
  bannerTypeId?: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl: string;
  subtitleRemark?: string;
  validUntil?: string;
  bannerType: BannerTypeResponse;
};
