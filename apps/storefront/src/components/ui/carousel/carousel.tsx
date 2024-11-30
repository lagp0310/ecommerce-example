"use client";

import React from "react";
import {
  type CarouselProviderProps,
  type SliderProps,
  type ButtonBackProps,
  type ButtonNextProps,
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export type Props = {
  children: React.ReactNode;
  carouselProviderProps: Omit<CarouselProviderProps, "children">;
  carouselSliderProps?: Omit<SliderProps, "children">;
  buttonBackProps?: ButtonBackProps;
  buttonNextProps?: ButtonNextProps;
};

export function Carousel({
  children,
  carouselProviderProps,
  carouselSliderProps,
  buttonBackProps,
  buttonNextProps,
}: Props) {
  return (
    <CarouselProvider {...carouselProviderProps}>
      <Slider {...carouselSliderProps}>{children}</Slider>
      {buttonBackProps?.children ? <ButtonBack {...buttonBackProps} /> : null}
      {buttonNextProps?.children ? <ButtonNext {...buttonNextProps} /> : null}
    </CarouselProvider>
  );
}
