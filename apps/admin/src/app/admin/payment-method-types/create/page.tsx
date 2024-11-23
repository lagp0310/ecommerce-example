import { PaymentMethodTypeCreate } from "@/components/payment-method-types";
import React from "react";

export default function PaymentMethodTypeCreatePage() {
  return (
    <React.Suspense>
      <PaymentMethodTypeCreate />
    </React.Suspense>
  );
}
