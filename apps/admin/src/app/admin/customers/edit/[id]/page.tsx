import { CustomerEdit } from "@/components/customers";
import React from "react";

export default function CustomerEditPage() {
  return (
    <React.Suspense>
      <CustomerEdit />
    </React.Suspense>
  );
}
