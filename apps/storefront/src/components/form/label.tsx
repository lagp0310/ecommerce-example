import React from "react";

type Props = React.HTMLProps<HTMLLabelElement>;

export function Label({ ...props }: Props) {
  return <label {...props}></label>;
}
