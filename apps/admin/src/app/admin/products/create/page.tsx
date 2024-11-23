import React from "react";
import { ProductCreate } from "@/components/products";

export default function ProductCreatePage() {
  return (
    <React.Suspense>
      <ProductCreate />
    </React.Suspense>
  );
}
