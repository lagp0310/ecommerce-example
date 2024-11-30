"use client";

import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { type Props as SlideProps, Slide } from "./slide";

type Props = React.PropsWithChildren<SlideProps>;

export function SlideMobileRenderer({ children, ...slideProps }: Props) {
  const isMobile = useIsMobile("(max-width: 640px)");

  return (
    <React.Fragment>
      {isMobile ? <Slide {...slideProps}>{children}</Slide> : children}
    </React.Fragment>
  );
}
