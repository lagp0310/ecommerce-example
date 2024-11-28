import React from "react";

type Props = React.HTMLProps<HTMLButtonElement>;

export function LanguageSelector({ ...props }: Props) {
  return <button {...props}></button>;
}
