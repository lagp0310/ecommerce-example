"use client";

import React from "react";
import { type ButtonNextProps, ButtonNext } from "pure-react-carousel";

type Props = ButtonNextProps;

export function ButtonNextRenderer({ ...props }: Props) {
  return <ButtonNext {...props} />;
}
