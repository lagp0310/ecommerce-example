import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function Banner({ ...props }: Props) {
  return <div {...props}></div>;
}
