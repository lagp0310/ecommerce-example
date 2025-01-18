import React from "react";

export type Props = React.HTMLProps<HTMLElement>;

export function Section({ ...props }: Props) {
  return <section {...props}></section>;
}
