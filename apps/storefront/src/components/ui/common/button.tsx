import React from "react";

export type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "reset" | "submit";
};

export function Button({ ...props }: Props) {
  return <button {...props}></button>;
}
