"use client";

import React from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { type Props as SlideProps, Slide } from "./slide";
import { defaultMobileMediaQuery } from "@/constants/constants";

// TODO: Refactor this into a single type object as optional carousel
// props for all the components using renderInDesktop and mobileMediaQuery.
type Props = React.PropsWithChildren<SlideProps> & {
  renderInDesktop?: boolean;
  mobileMediaQuery?: string;
};

export function SlideRenderer({
  children,
  renderInDesktop = false,
  mobileMediaQuery = defaultMobileMediaQuery,
  ...slideProps
}: Props) {
  const isMobile = useIsMobile(mobileMediaQuery);

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
