import React from "react";
import { CartList } from "@/components/carts";

export default function CartListPage() {
  return (
    <React.Suspense>
      <CartList />
    </React.Suspense>
  );
}
