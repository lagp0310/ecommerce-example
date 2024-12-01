"use client";

import React from "react";
import { type ButtonBackProps, ButtonBack } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

type Props = ButtonBackProps;

export function ButtonBackRenderer({ ...props }: Props) {
  return <ButtonBack {...props} />;
}
