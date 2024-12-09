import React from "react";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(await params);
  return <></>;
}
