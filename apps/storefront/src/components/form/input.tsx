import React from "react";

export type Props = React.HTMLProps<HTMLInputElement>;

export function Input({ ...props }: Props) {
  return <input {...props} />;
}
