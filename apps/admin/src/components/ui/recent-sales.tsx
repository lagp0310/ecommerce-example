import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type DashboardOrder } from "@/types/types";
import React from "react";
import { EmptyData } from "./illustrations/empty-data";

type Props = {
  latestOrders?: DashboardOrder[] | null;
};

export function RecentSales({ latestOrders }: Props) {
  const hasOrders = Array.isArray(latestOrders) && latestOrders.length > 0;

  return (
    <React.Fragment>
      {hasOrders ? (
        <div className="flex h-full flex-1 flex-col space-y-8">
          {latestOrders.map(
            ({ email, first_name, last_name, result_orders_total }, index) => (
              <div
                key={index}
                className="flex flex-wrap items-start justify-start"
              >
                <Avatar className="size-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>{`${first_name.substring(0, 1)}${last_name.substring(0, 1)}`}</AvatarFallback>
                </Avatar>
                <div className="ml-4 flex flex-1 flex-col gap-y-1 sm:flex-row sm:justify-start">
                  <div className="flex flex-1 flex-col gap-y-2">
                    <p className="mb-0 text-sm font-medium leading-none">
                      {`${first_name} ${last_name}`}
                    </p>
                    <p className="mb-0 text-sm">{email}</p>
                  </div>
                  <div className="flex flex-1 text-sm font-medium sm:justify-end sm:self-center">
                    ${result_orders_total.toFixed(2)}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-y-4 text-center">
          <EmptyData className="size-16 md:size-20" />
          <span className="text-lg font-bold">No data to be shown</span>
        </div>
      )}
    </React.Fragment>
  );
}
