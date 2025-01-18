import type { Header_Banners as HeaderBanner } from "@/gql/graphql";
import { BannerTypeResponse } from "@/types/banner-type/types";

export type HeaderBannerResponse = Omit<
  HeaderBanner,
  | "banner_type"
  | "cta_text"
  | "cta_url"
  | "image_url"
  | "subtitle_complement"
  | "subtitle_remark"
  | "banner_types"
  | "created_at"
  | "updated_at"
> & {
  bannerTypeId: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl: string;
  subtitleComplement?: string;
  subtitleRemark?: string;
  bannerType: BannerTypeResponse;
};
