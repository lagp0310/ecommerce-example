import React from "react";

export default async function Account({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  console.log(await params);
  return <></>;
}
