"use client";

import React from "react";
import {
  type SliderProps,
  type ButtonBackProps,
  type ButtonNextProps,
  ButtonBack,
  ButtonNext,
  Slider,
} from "pure-react-carousel";

export type Props = {
  children: React.ReactNode;
  carouselSliderProps?: Omit<SliderProps, "children">;
  buttonBackProps?: ButtonBackProps;
  buttonNextProps?: ButtonNextProps;
};

export function Carousel({
  children,
  carouselSliderProps,
  buttonBackProps,
  buttonNextProps,
}: Props) {
  return (
    <React.Fragment>
      <Slider {...carouselSliderProps}>{children}</Slider>
      {buttonBackProps?.children ? <ButtonBack {...buttonBackProps} /> : null}
      {buttonNextProps?.children ? <ButtonNext {...buttonNextProps} /> : null}
    </React.Fragment>
  );
}
