import React from "react";

type Props = React.HTMLProps<HTMLFormElement>;

export function Form({ ...props }: Props) {
  return <form {...props}></form>;
}
