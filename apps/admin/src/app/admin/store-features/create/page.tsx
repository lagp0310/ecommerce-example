import React from "react";
import { StoreFeatureCreate } from "@/components/store-features";

export default function StoreFeatureCreatePage() {
  return (
    <React.Suspense>
      <StoreFeatureCreate />
    </React.Suspense>
  );
}
