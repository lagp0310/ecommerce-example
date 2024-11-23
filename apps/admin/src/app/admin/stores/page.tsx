import { StoreList } from "@/components/stores";
import React from "react";

export default function StoreListPage() {
  return (
    <React.Suspense>
      <StoreList />
    </React.Suspense>
  );
}
