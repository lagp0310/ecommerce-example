import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function Section({ ...props }: Props) {
  return <div {...props}></div>;
}
