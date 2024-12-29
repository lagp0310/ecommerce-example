import React from "react";

type Props = React.HTMLProps<HTMLTextAreaElement>;

export function Textarea({ ...props }: Props) {
  return <textarea {...props}></textarea>;
}
