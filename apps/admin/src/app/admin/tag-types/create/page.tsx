import React from "react";
import { TagTypeCreate } from "@/components/tag-types";

export default function TagTypeCreatePage() {
  return (
    <React.Suspense>
      <TagTypeCreate />
    </React.Suspense>
  );
}
