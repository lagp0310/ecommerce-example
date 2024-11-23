import { BannerTypeCreate } from "@/components/banner-types";
import React from "react";

export default function BannerTypeCreatePage() {
  return (
    <React.Suspense>
      <BannerTypeCreate />
    </React.Suspense>
  );
}
