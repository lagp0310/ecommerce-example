import { CategoryEdit } from "@/components/categories";
import React from "react";

export default function CategoryEditPage() {
  return (
    <React.Suspense>
      <CategoryEdit />
    </React.Suspense>
  );
}
