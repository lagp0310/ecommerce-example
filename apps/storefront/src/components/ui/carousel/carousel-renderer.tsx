"use client";

import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Carousel } from "./carousel";
import { CarouselRendererProps } from "@/types/types";
import { isMobileMediaQuery } from "@/constants/constants";

type Props = React.PropsWithChildren<CarouselRendererProps>;

export function CarouselRenderer({
  children,
  renderInDesktop = false,
  ...carouselProps
}: Props) {
  const isMobile = useIsMobile(isMobileMediaQuery);

  return (
    <React.Fragment>
      {isMobile || renderInDesktop ? (
        <Carousel {...carouselProps}>{children}</Carousel>
      ) : (
        children
      )}
    </React.Fragment>
  );
}
