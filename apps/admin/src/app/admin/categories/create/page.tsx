import React from "react";
import { CategoryCreate } from "@/components/categories";

export default function CategoryCreatePage() {
  return (
    <React.Suspense>
      <CategoryCreate />
    </React.Suspense>
  );
}
