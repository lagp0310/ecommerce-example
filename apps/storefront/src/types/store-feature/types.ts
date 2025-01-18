import type { Store_Features as StoreFeatureResult } from "@/gql/graphql";

export type StoreFeature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type StoreFeatureResponse = Omit<StoreFeatureResult, "icon_name"> & {
  iconName?: string;
};

export enum StoreFeatureIcon {
  TRUCK_ICON = "TruckIcon",
  HEADPHONES_ICON = "HeadphonesIcon",
  SHOPPING_BAG_CHECKED_ICON = "ShoppingBagCheckedIcon",
  BOX_ICON = "BoxIcon",
}
