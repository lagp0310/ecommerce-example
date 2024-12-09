import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function CartProduct({ ...props }: Props) {
  return <div {...props}></div>;
}
