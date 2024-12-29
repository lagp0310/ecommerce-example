import React from "react";

type Props = React.HTMLProps<HTMLInputElement>;

export function Input({ ...props }: Props) {
  return <input {...props} />;
}
