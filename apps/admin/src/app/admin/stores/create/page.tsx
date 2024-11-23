import { StoreCreate } from "@/components/stores";
import React from "react";

export default function StoreCreatePage() {
  return (
    <React.Suspense>
      <StoreCreate />
    </React.Suspense>
  );
}
