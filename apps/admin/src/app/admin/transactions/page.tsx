import { TransactionList } from "@/components/transactions";
import React from "react";

export default function TransactionListPage() {
  return (
    <React.Suspense>
      <TransactionList />
    </React.Suspense>
  );
}
