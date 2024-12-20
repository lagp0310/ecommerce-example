import React from "react";
import { ProductTagList } from "@/components/product-tags";

export default function ProductTagListPage() {
  return (
    <React.Suspense>
      <ProductTagList />
    </React.Suspense>
  );
}
