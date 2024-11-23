import { CurrencyEdit } from "@/components/currencies";
import React from "react";

export default function CurrencyEditPage() {
  return (
    <React.Suspense>
      <CurrencyEdit />
    </React.Suspense>
  );
}
