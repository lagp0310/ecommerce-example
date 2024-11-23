import React from "react";
import { PaymentList } from "@/components/payments";

export default function PaymentListPage() {
  return (
    <React.Suspense>
      <PaymentList />
    </React.Suspense>
  );
}
