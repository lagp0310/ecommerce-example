import { PaymentMethodEdit } from "@/components/payment-methods";
import React from "react";

export default function PaymentMethodEditPage() {
  return (
    <React.Suspense>
      <PaymentMethodEdit />
    </React.Suspense>
  );
}
