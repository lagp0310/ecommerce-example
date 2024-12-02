"use client";

import React from "react";
import { CarouselProvider as Provider } from "pure-react-carousel";
import { useIsMobile } from "@/hooks/useIsMobile";
import { CarouselProviderCustomProps } from "@/types/types";
import {
  defaultVisibleSlides,
  defaultMobileMediaQuery,
} from "@/constants/constants";
import { useVisibleSlides } from "@/hooks/useVisibleSlides";

type Props = React.PropsWithChildren<CarouselProviderCustomProps>;

export function CarouselProvider({
  children,
  renderInDesktop = false,
  mobileMediaQuery = defaultMobileMediaQuery,
  visibleSlides = defaultVisibleSlides,
  visibleSlidesSm,
  visibleSlidesMd,
  visibleSlidesLg,
  visibleSlidesXl,
  ...props
}: Props) {
  const isMobile = useIsMobile(mobileMediaQuery);
  const currentVisibleSlides = useVisibleSlides({
    visibleSlides,
    mediaQuerySlides: [
      visibleSlidesSm,
      visibleSlidesMd,
      visibleSlidesLg,
      visibleSlidesXl,
    ],
  });

  return (
    <React.Fragment>
      {isMobile || renderInDesktop ? (
        <Provider {...props} visibleSlides={currentVisibleSlides}>
          {children}
        </Provider>
      ) : (
        children
      )}
    </React.Fragment>
  );
}
