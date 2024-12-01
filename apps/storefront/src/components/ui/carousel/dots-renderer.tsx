"use client";

import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { isMobileMediaQuery } from "@/constants/constants";

type Props = React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> & {
  renderInDesktop?: boolean;
};

export function DotsRenderer({
  children,
  renderInDesktop = false,
  ...containerProps
}: Props) {
  const isMobile = useIsMobile(isMobileMediaQuery);

  return (
    <div {...containerProps}>
      {isMobile || renderInDesktop ? children : null}
    </div>
  );
}
