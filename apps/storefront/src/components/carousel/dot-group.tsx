"use client";

import React from "react";
import {
  type DotGroupProps,
  DotGroup as CarouselDotGroup,
} from "pure-react-carousel";

export type Props = DotGroupProps;

export function DotGroup({ ...props }: Props) {
  return <CarouselDotGroup {...props} />;
}
