"use client";

import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Props = React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>;

export function DotsMobileRenderer({ children, ...containerProps }: Props) {
  const isMobile = useIsMobile("(max-width: 640px)");

  return <div {...containerProps}>{isMobile ? children : null}</div>;
}
