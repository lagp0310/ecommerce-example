import React from "react";

export default async function AccountSettings({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  console.log(await params);
  return <></>;
}
