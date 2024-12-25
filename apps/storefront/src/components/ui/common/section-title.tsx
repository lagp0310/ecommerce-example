import React from "react";

type Props = React.HTMLProps<HTMLHeadingElement>;

export function SectionTitle({ ...props }: Props) {
  return <h5 {...props}></h5>;
}
