"use client";

import React from "react";
import { type DotProps, Dot as CarouselDot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

type Props = DotProps;

export function Dot({ ...props }: Props) {
  return <CarouselDot {...props} />;
}
