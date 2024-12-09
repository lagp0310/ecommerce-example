import React from "react";

export type Props = React.HTMLProps<HTMLDivElement>;

export function CartProductActions({ ...props }: Props) {
  return <div {...props}></div>;
}
