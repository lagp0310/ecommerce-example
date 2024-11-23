import { StoreOfferBannerList } from "@/components/store-offer-banners";
import React from "react";

export default function StoreOfferBannerListPage() {
  return (
    <React.Suspense>
      <StoreOfferBannerList />
    </React.Suspense>
  );
}
