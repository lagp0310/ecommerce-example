import { CustomerList } from "@/components/customers";
import React from "react";

export default function CustomerListPage() {
  return (
    <React.Suspense>
      <CustomerList />
    </React.Suspense>
  );
}
