import React from "react";

export default async function Wishlist({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  console.log(await params);
  return <></>;
}
