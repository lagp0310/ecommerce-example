import React from "react";

type Props = React.HTMLProps<HTMLButtonElement>;

export function Button({ ...props }: Props) {
  return <button {...props}></button>;
}
