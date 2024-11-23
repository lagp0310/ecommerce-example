import { PaymentMethodTypeList } from "@/components/payment-method-types";
import React from "react";

export default function PaymentMethodTypeListPage() {
  return (
    <React.Suspense>
      <PaymentMethodTypeList />
    </React.Suspense>
  );
}
