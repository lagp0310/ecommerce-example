import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export function CategoryCard({ ...props }: Props) {
  return <div {...props}></div>;
}
