import { CurrencyCreate } from "@/components/currencies";
import React from "react";

export default function CurrencyCreatePage() {
  return (
    <React.Suspense>
      <CurrencyCreate />
    </React.Suspense>
  );
}
