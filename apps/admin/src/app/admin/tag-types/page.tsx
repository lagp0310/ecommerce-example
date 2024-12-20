import React from "react";
import { TagTypeList } from "@/components/tag-types";

export default function TagTypeListPage() {
  return (
    <React.Suspense>
      <TagTypeList />
    </React.Suspense>
  );
}
