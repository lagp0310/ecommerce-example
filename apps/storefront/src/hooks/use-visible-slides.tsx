"use client";

import { defaultVisibleSlides } from "@/constants/constants";
import React from "react";

export type MediaQuerySlide =
  | {
      mediaQuery: string;
      visibleSlides: number;
    }
  | undefined;
export type VisibleSlidesHookParams = {
  visibleSlides?: number;
  mediaQuerySlides?: MediaQuerySlide[];
};

export function useVisibleSlides({
  visibleSlides = defaultVisibleSlides,
  mediaQuerySlides,
}: VisibleSlidesHookParams) {
  const wasInitiallyCalled = React.useRef(false);
  const [currentVisibleSlides, setCurrentVisibleSlides] =
    React.useState(visibleSlides);

  const handleViewportResize = React.useCallback(() => {
    if (
      typeof window === "undefined" ||
      !Array.isArray(mediaQuerySlides) ||
      mediaQuerySlides.length === 0
    ) {
      return;
    }

    const newVisibleSlides =
      mediaQuerySlides
        ?.filter(
          (mediaQuerySlide) =>
            typeof mediaQuerySlide?.mediaQuery === "string" &&
            window.matchMedia(mediaQuerySlide.mediaQuery).matches
        )
        ?.map((mediaQuerySlide) =>
          typeof mediaQuerySlide?.visibleSlides === "number"
            ? mediaQuerySlide.visibleSlides
            : null
        )
        ?.findLast((value) => !!value) ?? visibleSlides;

    setCurrentVisibleSlides(newVisibleSlides);
  }, [mediaQuerySlides, visibleSlides]);

  React.useEffect(() => {
    if (
      typeof window === "undefined" ||
      !Array.isArray(mediaQuerySlides) ||
      mediaQuerySlides.length === 0
    ) {
      return;
    }

    window.addEventListener("load", handleViewportResize);
    window.addEventListener("resize", handleViewportResize);

    if (
      !wasInitiallyCalled.current &&
      (!Array.isArray(mediaQuerySlides) || mediaQuerySlides.length === 0)
    ) {
      handleViewportResize();
      wasInitiallyCalled.current = true;
    }

    return () => {
      window.removeEventListener("load", handleViewportResize);
      window.removeEventListener("resize", handleViewportResize);
    };
  }, [handleViewportResize, mediaQuerySlides]);

  return currentVisibleSlides;
}
