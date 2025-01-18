import type { Image_Banners as ImageBanner } from "@/gql/graphql";
import { BannerTypeResponse } from "@/types/banner-type/types";

export type ImageBannerResponse = Omit<
  ImageBanner,
  | "banner_type"
  | "cta_text"
  | "cta_url"
  | "image_url"
  | "header_remark"
  | "banner_types"
  | "created_at"
  | "updated_at"
> & {
  bannerTypeId: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl: string;
  headerRemark?: string;
  bannerType: BannerTypeResponse;
};
