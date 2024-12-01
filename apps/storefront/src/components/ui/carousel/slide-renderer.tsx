"use client";

import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { type Props as SlideProps, Slide } from "./slide";
import { isMobileMediaQuery } from "@/constants/constants";

type Props = React.PropsWithChildren<SlideProps> & {
  renderInDesktop?: boolean;
};

export function SlideRenderer({
  children,
  renderInDesktop = false,
  ...slideProps
}: Props) {
  const isMobile = useIsMobile(isMobileMediaQuery);

  return (
    <React.Fragment>
      {isMobile || renderInDesktop ? (
        <Slide {...slideProps}>{children}</Slide>
      ) : (
        children
      )}
    </React.Fragment>
  );
}
