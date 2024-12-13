import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/common/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

type Props = DialogProps & {
  dialogTrigger?: React.ReactNode;
  wrapperClassname?: string;
  contentClassname?: string;
};

export function FiltersWrapper({
  dialogTrigger = (
    <DialogTrigger className="group/filter-button flex w-full flex-row items-center justify-center gap-x-2 rounded-full border border-primary bg-white px-5 py-3 text-body-small font-semibold leading-[120%] text-primary outline-none hover:bg-primary hover:text-white motion-safe:transition motion-safe:duration-100 motion-safe:ease-linear motion-reduce:transition-none md:text-body-medium">
      Filters{" "}
      <AdjustmentsHorizontalIcon className="size-5 text-primary group-hover/filter-button:text-white" />
    </DialogTrigger>
  ),
  children,
  wrapperClassname = "",
  contentClassname = "",
  ...props
}: Props) {
  return (
    <div className={wrapperClassname}>
      <Dialog {...props}>
        {dialogTrigger}
        <DialogContent className={contentClassname}>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
