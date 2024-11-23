import { PaymentMethodCreate } from "@/components/payment-methods";
import React from "react";

export default function PaymentMethodCreatePage() {
  return (
    <React.Suspense>
      <PaymentMethodCreate />
    </React.Suspense>
  );
}
