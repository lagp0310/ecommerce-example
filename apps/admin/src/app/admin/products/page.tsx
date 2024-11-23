import React from "react";
import { ProductList } from "@/components/products";

export default function ProductListPage() {
  return (
    <React.Suspense>
      <ProductList />
    </React.Suspense>
  );
}
