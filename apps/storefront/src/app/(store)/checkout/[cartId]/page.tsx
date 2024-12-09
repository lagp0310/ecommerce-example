import React from "react";

export default async function Checkout({
  params,
}: {
  params: Promise<{ cartId: string }>;
}) {
  console.log(await params);
  return <></>;
}
