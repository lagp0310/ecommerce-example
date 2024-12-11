import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function Tag({ ...props }: Props) {
  return <div {...props}></div>;
}
