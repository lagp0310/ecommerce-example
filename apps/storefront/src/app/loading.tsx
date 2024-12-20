import { Skeleton } from "@/components/ui/common/skeleton";
import { defaultCarouselProductSkeletons } from "@/constants/product/constants";
import React from "react";

export default function Loading() {
  return (
    <div className="my-6 flex flex-1 flex-col gap-y-6">
      <div className="flex flex-1 flex-row items-center justify-center px-6 xl:px-0">
        <section className="grid w-full max-w-7xl gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <Skeleton className="col-span-2 row-span-2 h-[550px] w-full rounded-[10px]" />
          <Skeleton className="col-span-1 row-span-1 h-auto w-full rounded-[10px]" />
          <Skeleton className="col-span-1 row-span-1 h-auto w-full rounded-[10px]" />
        </section>
      </div>
      <div className="flex flex-1 flex-row items-center justify-center">
        <Skeleton className="h-[150px] w-full max-w-7xl rounded-[10px]" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-y-6">
        <div className="flex w-full flex-1 flex-row items-center justify-center">
          <Skeleton className="h-[50px] w-full max-w-7xl" />
        </div>
        <div className="flex flex-1 flex-row items-center justify-center">
          <div className="flex max-w-7xl flex-1 flex-row items-center justify-center">
            {Array.from({ length: defaultCarouselProductSkeletons }).map(
              (_value, index) => (
                <div
                  key={index}
                  className="group/product-skeleton ml-4 flex size-full flex-1 flex-row items-center justify-evenly first:ml-0"
                >
                  <Skeleton className="h-[280px] w-full rounded-[10px]" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
