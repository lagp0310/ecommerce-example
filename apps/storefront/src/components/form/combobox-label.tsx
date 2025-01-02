"use client";

import { useCombobox } from "@/context/combobox-context";
import React from "react";

type Props = React.HTMLProps<HTMLLabelElement>;

export function ComboboxLabel({ disabled, ...props }: Props) {
  const { open, setOpen } = useCombobox();

  const onLabelClick = React.useCallback(() => {
    if (open || disabled) {
      return;
    }

    setOpen(true);
  }, [disabled, open, setOpen]);

  return <label {...props} onClick={onLabelClick}></label>;
}
