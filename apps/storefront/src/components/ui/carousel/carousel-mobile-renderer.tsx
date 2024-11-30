"use client";

import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { type Props as CarouselProps, Carousel } from "./carousel";

type Props = React.PropsWithChildren<CarouselProps>;

export function CarouselMobileRenderer({ children, ...carouselProps }: Props) {
  const isMobile = useIsMobile("(max-width: 640px)");

  return (
    <React.Fragment>
      {isMobile ? <Carousel {...carouselProps}>{children}</Carousel> : children}
    </React.Fragment>
  );
}
