"use client";

import React from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Carousel } from "@/components/carousel/carousel";
import { CarouselRendererProps } from "@/types/types";
import { defaultMobileMediaQuery } from "@/constants/constants";

type Props = React.PropsWithChildren<CarouselRendererProps>;

export function CarouselRenderer({
  children,
  renderInDesktop = false,
  mobileMediaQuery = defaultMobileMediaQuery,
  ...carouselProps
}: Props) {
  const isMobile = useIsMobile(mobileMediaQuery);

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
