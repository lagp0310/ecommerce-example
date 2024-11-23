import { OrderList } from "@/components/orders";
import React from "react";

export default function OrderListPage() {
  return (
    <React.Suspense>
      <OrderList />
    </React.Suspense>
  );
}
