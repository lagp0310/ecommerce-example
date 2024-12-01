"use client";

import React from "react";
import { type ButtonNextProps, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

type Props = ButtonNextProps;

export function ButtonNextRenderer({ ...props }: Props) {
  return <ButtonNext {...props} />;
}
