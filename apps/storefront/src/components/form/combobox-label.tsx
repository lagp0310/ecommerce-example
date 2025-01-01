"use client";

import { useCombobox } from "@/context/combobox-context";
import React from "react";

type Props = React.HTMLProps<HTMLLabelElement>;

export function ComboboxLabel({ ...props }: Props) {
  const { open, setOpen } = useCombobox();

  const onLabelClick = React.useCallback(() => {
    if (open) {
      return;
    }

    setOpen(true);
  }, [open, setOpen]);

  return <label {...props} onClick={onLabelClick}></label>;
}
