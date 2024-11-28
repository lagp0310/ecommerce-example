import React from "react";

type Props = React.HTMLProps<HTMLButtonElement>;

export function CurrencySelector({ ...props }: Props) {
  return <button {...props}></button>;
}
