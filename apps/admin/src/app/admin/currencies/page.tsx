import { CurrencyList } from "@/components/currencies";
import React from "react";

export default function CurrencyListPage() {
  return (
    <React.Suspense>
      <CurrencyList />
    </React.Suspense>
  );
}
