import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

type Props = DialogProps & {
  dialogTrigger?: React.ReactNode;
  wrapperClassname?: string;
  contentClassname?: string;
};

export function FiltersWrapper({
  dialogTrigger = (
    <DialogTrigger className="outline-none w-full flex flex-row gap-x-2 justify-center items-center bg-white border border-primary rounded-full text-primary px-5 py-3 text-body-small md:text-body-medium font-semibold leading-[120%] group/filter-button hover:text-white hover:bg-primary motion-safe:transition motion-reduce:transition-none motion-safe:ease-linear motion-safe:duration-100">
      Filters{" "}
      <AdjustmentsHorizontalIcon className="h-5 w-5 text-primary group-hover/filter-button:text-white" />
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
