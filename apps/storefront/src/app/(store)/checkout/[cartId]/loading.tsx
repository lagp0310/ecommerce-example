import { Skeleton } from "@/components/ui/common/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="my-6 flex flex-1 flex-col gap-y-6">
      <div className="flex flex-1 flex-row items-center justify-center px-6 xl:px-0">
        <section className="flex w-full max-w-7xl flex-1 flex-col gap-6 md:flex-row">
          <Skeleton className="h-[50px] w-full rounded-ten" />
        </section>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-y-6 px-6 xl:px-0">
        <div className="flex flex-1 flex-row items-center justify-center">
          <div className="flex max-w-7xl flex-1 flex-col gap-6 md:flex-row md:items-center md:justify-center">
            <Skeleton className="h-80 w-full rounded-ten md:basis-2/3" />
            <Skeleton className="h-80 w-full rounded-ten md:basis-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
