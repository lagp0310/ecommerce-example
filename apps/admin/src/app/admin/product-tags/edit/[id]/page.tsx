import React from "react";
import { ProductTagEdit } from "@/components/product-tags";

export default function ProductTagEditPage() {
  return (
    <React.Suspense>
      <ProductTagEdit />
    </React.Suspense>
  );
}
