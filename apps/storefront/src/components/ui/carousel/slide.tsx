"use client";

import React from "react";
import { type SlideProps, Slide as CarouselSlide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export type Props = SlideProps;

export function Slide({ ...props }: Props) {
  return <CarouselSlide {...props} />;
}
