import { StoreImageBannerList } from "@/components/store-image-banners";
import React from "react";

export default function StoreImageBannerListPage() {
  return (
    <React.Suspense>
      <StoreImageBannerList />
    </React.Suspense>
  );
}
