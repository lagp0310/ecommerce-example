import { StoreHeaderBannerList } from "@/components/store-header-banners";
import React from "react";

export default function StoreHeaderBannerListPage() {
  return (
    <React.Suspense>
      <StoreHeaderBannerList />
    </React.Suspense>
  );
}
