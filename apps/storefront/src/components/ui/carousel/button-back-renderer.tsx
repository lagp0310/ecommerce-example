"use client";

import React from "react";
import { type ButtonBackProps, ButtonBack } from "pure-react-carousel";

type Props = ButtonBackProps;

export function ButtonBackRenderer({ ...props }: Props) {
  return <ButtonBack {...props} />;
}
