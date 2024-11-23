import { ProductEdit } from "@/components/products";
import React from "react";

export default function ProductEditPage() {
  return (
    <React.Suspense>
      <ProductEdit />
    </React.Suspense>
  );
}
