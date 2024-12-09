import React from "react";

export default async function ResetPassword({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  console.log(await params);
  return <></>;
}
