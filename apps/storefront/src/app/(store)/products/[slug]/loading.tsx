import { Skeleton } from "@/components/ui/common/skeleton";
import { productSkeletonFields } from "@/constants/product/constants";
import React from "react";

export default function Loading() {
  return (
    <div className="my-6 flex flex-1 flex-col gap-y-6">
      <div className="flex flex-1 flex-row items-center justify-center px-6 xl:px-0">
        <section className="flex w-full max-w-7xl flex-1 flex-col md:flex-row gap-6">
          <Skeleton className="h-[350px] md:h-[550px] w-full md:basis-1/2 rounded-[10px]" />
          <div className="flex flex-1 basis-1/2 flex-col gap-y-6">
            {Array.from({ length: productSkeletonFields }).map(
              (_value, index) => (
                <Skeleton
                  key={index}
                  className="h-[30px] w-full rounded-[10px]"
                />
              )
            )}
          </div>
        </section>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-y-6 px-6 xl:px-0">
        <div className="flex w-full flex-1 flex-row items-center justify-center">
          <Skeleton className="h-[50px] w-full max-w-7xl" />
        </div>
        <div className="flex flex-1 flex-row items-center justify-center">
          <div className="flex max-w-7xl flex-1 flex-row items-center justify-center">
            <Skeleton className="h-[280px] w-full rounded-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
