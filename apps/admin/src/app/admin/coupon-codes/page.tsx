import React from "react";
import { CouponCodesList } from "@/components/coupon-codes";

export default function CouponCodesListPage() {
  return (
    <React.Suspense>
      <CouponCodesList />
    </React.Suspense>
  );
}
