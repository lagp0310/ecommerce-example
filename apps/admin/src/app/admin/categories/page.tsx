import React from "react";
import { CategoryList } from "@/components/categories";

export default function CategoryListPage() {
  return (
    <React.Suspense>
      <CategoryList />
    </React.Suspense>
  );
}
