import React from "react";
import { BusinessCreate } from "@/components/businesses";

export default function BusinessCreatePage() {
  return (
    <React.Suspense>
      <BusinessCreate />
    </React.Suspense>
  );
}
