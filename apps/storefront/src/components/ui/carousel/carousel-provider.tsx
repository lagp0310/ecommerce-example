"use client";

import React from "react";
import {
  type CarouselProviderProps as ProviderProps,
  CarouselProvider as Provider,
} from "pure-react-carousel";

type Props = React.PropsWithChildren<ProviderProps>;

export function CarouselProvider({ ...props }: Props) {
  return <Provider {...props} />;
}
