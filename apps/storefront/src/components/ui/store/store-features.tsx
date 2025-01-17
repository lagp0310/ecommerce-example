import React from "react";

type Props = React.HTMLProps<HTMLElement>;

export function StoreFeatures({ ...props }: Props) {
  return <section {...props}></section>;
}
