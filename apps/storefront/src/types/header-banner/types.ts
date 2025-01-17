import type {
  Header_Banners as HeaderBanner,
  Offer_Banners as OfferBanner,
  Image_Banners as ImageBanner,
  Banner_Types as BannerType,
} from "@/gql/graphql";

export type BannerTypeResponse = Omit<
  BannerType,
  "created_at" | "updated_at"
> & {
  createdAt?: string;
  updatedAt?: string;
};

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
