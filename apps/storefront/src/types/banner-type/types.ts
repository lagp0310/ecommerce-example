import type { Banner_Types as BannerType } from "@/gql/graphql";

export type BannerTypeResponse = Omit<
  BannerType,
  "created_at" | "updated_at"
> & {
  createdAt?: string;
  updatedAt?: string;
};
