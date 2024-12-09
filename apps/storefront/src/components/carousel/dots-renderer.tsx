"use client";

import React from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { defaultMobileMediaQuery } from "@/constants/constants";

type Props = React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> & {
  renderInDesktop?: boolean;
  mobileMediaQuery?: string;
};

export function DotsRenderer({
  children,
  renderInDesktop = false,
  mobileMediaQuery = defaultMobileMediaQuery,
  ...containerProps
}: Props) {
  const isMobile = useIsMobile(mobileMediaQuery);

  return (
    <div {...containerProps}>
      {isMobile || renderInDesktop ? children : null}
    </div>
  );
}
