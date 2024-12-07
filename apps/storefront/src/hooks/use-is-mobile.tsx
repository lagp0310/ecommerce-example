"use client";

import React from "react";

export function useIsMobile(mediaQuery: string) {
  const doesMatchMedia = React.useCallback((query: string) => {
    if (typeof window === "undefined") return false;

    if (typeof query !== "string") {
      throw new Error(
        "You should provide a media query to the useIsMobile hook"
      );
    }

    return window.matchMedia(query).matches;
  }, []);
  const [isMobile, setIsMobile] = React.useState(doesMatchMedia(mediaQuery));

  const handleWindowResize = React.useCallback(() => {
    setIsMobile(doesMatchMedia(mediaQuery));
  }, [doesMatchMedia, mediaQuery]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return isMobile;
}
