import { BusinessList } from "@/components/businesses";
import React from "react";

export default function BusinessListPage() {
  return (
    <React.Suspense>
      <BusinessList />
    </React.Suspense>
  );
}
