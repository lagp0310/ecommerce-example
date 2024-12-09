import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function ProductCard({ ...props }: Props) {
  return <div {...props}></div>;
}
