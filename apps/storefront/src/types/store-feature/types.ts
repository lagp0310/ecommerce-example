import type { Store_Features as StoreFeatureResult } from "@/gql/graphql";

export type StoreFeature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type StoreFeatureResponse = Omit<StoreFeatureResult, "icon_name"> & {
  iconName?: string;
};
