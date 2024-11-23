import React from "react";
import { StoreFeatureList } from "@/components/store-features";

export default function StoreFeatureListPage() {
  return (
    <React.Suspense>
      <StoreFeatureList />
    </React.Suspense>
  );
}
