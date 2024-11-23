import { BannerTypeList } from "@/components/banner-types";
import React from "react";

export default function BannerTypeListPage() {
  return (
    <React.Suspense>
      <BannerTypeList />
    </React.Suspense>
  );
}
