import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type DashboardOrder } from "@/types/types";
import React from "react";

type Props = {
  latestOrders?: DashboardOrder[] | null;
};

export function RecentSales({ latestOrders }: Props) {
  const hasOrders = Array.isArray(latestOrders) && latestOrders.length > 0;

  return (
    <React.Fragment>
      {hasOrders ? (
        <div className="space-y-8">
          {latestOrders.map(
            ({ email, first_name, last_name, result_orders_total }, index) => (
              <div
                key={index}
                className="flex items-start flex-wrap justify-start"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>{`${first_name.substring(0, 1)} ${last_name.substring(0, 1)}`}</AvatarFallback>
                </Avatar>
                <div className="ml-4 flex flex-1 flex-col sm:flex-row gap-y-1 sm:justify-start">
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium leading-none mb-2">
                      {`${first_name} ${last_name}`}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {email}
                    </p>
                  </div>
                  <div className="font-medium flex flex-1 sm:justify-end sm:self-center">
                    $
                    {new Intl.NumberFormat("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(result_orders_total)}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <span className="text-lg font-bold">No orders yet</span>
      )}
    </React.Fragment>
  );
}
