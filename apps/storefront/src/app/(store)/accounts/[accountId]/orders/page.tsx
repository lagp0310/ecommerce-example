import React from "react";

export default async function Orders({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  console.log(await params);
  return <></>;
}
