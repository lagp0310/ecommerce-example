"use client";

import React from "react";
import {
  type CarouselProviderProps as ProviderProps,
  CarouselProvider as Provider,
} from "pure-react-carousel";
import { useIsMobile } from "@/hooks/useIsMobile";

type Props = React.PropsWithChildren<ProviderProps>;

export function CarouselProvider({ children, ...props }: Props) {
  const isMobile = useIsMobile("(max-width: 640px)");

  return (
    <React.Fragment>
      {isMobile ? <Provider {...props}>{children}</Provider> : children}
    </React.Fragment>
  );
}
