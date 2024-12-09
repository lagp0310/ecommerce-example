"use client";

import React from "react";
import { type DotProps, Dot as CarouselDot } from "pure-react-carousel";

type Props = DotProps;

export function Dot({ ...props }: Props) {
  return <CarouselDot {...props} />;
}
