import { CustomerCreate } from "@/components/customers";
import React from "react";

export default function CustomerCreatePage() {
  return (
    <React.Suspense>
      <CustomerCreate />
    </React.Suspense>
  );
}
