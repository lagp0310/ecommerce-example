import React from "react";
import { PaymentMethodList } from "@/components/payment-methods";

export default function PaymentMethodListPage() {
  return (
    <React.Suspense>
      <PaymentMethodList />
    </React.Suspense>
  );
}
