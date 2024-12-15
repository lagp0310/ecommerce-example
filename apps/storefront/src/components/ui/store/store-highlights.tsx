import React from "react";

type Props = React.HTMLProps<HTMLElement>;

export function StoreHighlights({ ...props }: Props) {
  return <section {...props}></section>;
}
