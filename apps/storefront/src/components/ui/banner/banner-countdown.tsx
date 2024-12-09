"use client";

import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function BannerCountdown({ ...props }: Props) {
  return <div {...props}></div>;
}
