import React from "react";

export type Props = React.HTMLProps<HTMLTextAreaElement>;

export function Textarea({ ...props }: Props) {
  return <textarea {...props}></textarea>;
}
