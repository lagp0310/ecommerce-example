"use client";

import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Props = React.PropsWithChildren;

export function DotsMobileRenderer({ children }: Props) {
  const isMobile = useIsMobile("(max-width: 640px)");

  return <React.Fragment>{isMobile ? children : null}</React.Fragment>;
}
