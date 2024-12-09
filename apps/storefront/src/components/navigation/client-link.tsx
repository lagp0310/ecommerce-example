"use client";

import React from "react";
import Link, { type LinkProps } from "next/link";

type Props = React.PropsWithChildren<LinkProps> &
  React.HTMLProps<HTMLAnchorElement>;

export function ClientLink({ ...props }: Props) {
  return <Link {...props} />;
}
