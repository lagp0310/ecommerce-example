import React from "react";

export default async function Order({
  params,
}: {
  params: Promise<{ accountId: string; orderId: string }>;
}) {
  console.log(await params);
  return <></>;
}
