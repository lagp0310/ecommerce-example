import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function FooterContent({ ...props }: Props) {
  return <div {...props}></div>;
}
