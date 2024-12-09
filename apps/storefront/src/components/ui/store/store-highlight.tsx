import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function StoreHighlight({ ...props }: Props) {
  return <div {...props}></div>;
}
