import React from "react";

type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "button" | "reset" | "submit";
};

export function Button({ ...props }: Props) {
  return <button {...props}></button>;
}
