import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function StoreFeature({ ...props }: Props) {
  return <div {...props}></div>;
}
