import React from "react";

export default async function Cart({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(await params);
  return <></>;
}
