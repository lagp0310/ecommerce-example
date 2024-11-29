import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function SectionContent({ ...props }: Props) {
  return <div {...props}></div>;
}
