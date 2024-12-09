import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function Navbar({ ...props }: Props) {
  return <div {...props}></div>;
}
