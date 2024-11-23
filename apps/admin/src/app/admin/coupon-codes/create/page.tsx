import React from "react";
import { CouponCodesCreate } from "@/components/coupon-codes";

export default function CouponCodesCreatePage() {
  return (
    <React.Suspense>
      <CouponCodesCreate />
    </React.Suspense>
  );
}
