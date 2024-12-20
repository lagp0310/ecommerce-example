import React from "react";
import { ProductTagCreate } from "@/components/product-tags";

export default function ProductTagCreatePage() {
  return (
    <React.Suspense>
      <ProductTagCreate />
    </React.Suspense>
  );
}
