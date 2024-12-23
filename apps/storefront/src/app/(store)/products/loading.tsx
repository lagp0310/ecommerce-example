import { Skeleton } from "@/components/ui/common/skeleton";
import { defaultProductsShowPerPage } from "@/constants/constants";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-1 flex-col gap-y-8 px-6 py-8 xl:px-0">
      <div className="flex w-full flex-1 flex-col xl:items-center">
        <div className="grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-4 xl:grid-cols-5">
          <Skeleton className="col-span-1 h-[50px] w-full rounded-[10px] lg:row-span-5 lg:size-full" />
          {Array.from({ length: defaultProductsShowPerPage }).map(
            (_value, index) => (
              <div key={index} className="grid size-full">
                <Skeleton className="h-[300px] w-full rounded-[10px] lg:w-[250px]" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
