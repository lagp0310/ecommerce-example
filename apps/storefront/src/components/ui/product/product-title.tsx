import React from "react";

type Props = React.HTMLProps<HTMLHeadingElement>;

export function ProductTitle({ ...props }: Props) {
  return <h2 {...props}></h2>;
}
