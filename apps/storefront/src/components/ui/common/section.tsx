import React from "react";

type Props = React.HTMLProps<HTMLElement>;

export function Section({ ...props }: Props) {
  return <section {...props}></section>;
}
