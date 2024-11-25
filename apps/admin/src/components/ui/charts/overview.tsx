"use client";

import React from "react";
import { type OrderSummary } from "@/types/types";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { getMonthName } from "@/lib/utils";

type Props = {
  data?: OrderSummary[] | null;
};

export function Overview({ data }: Props) {
  const hasData = React.useMemo(() => !!data, [data]);
  const chartData = React.useMemo(() => {
    const dataObjects = Array.from({ length: 12 }).map((_value, index) => {
      const monthData = data?.find(
        ({ result_month_number }) => result_month_number === index + 1
      );

      return {
        monthName: monthData?.result_month_name ?? getMonthName(index + 1),
        ordersTotal: monthData?.orders_total ?? 0,
        totalOrders: monthData?.total_orders ?? 0,
      };
    });

    return dataObjects;
  }, [data]);

  return (
    <React.Fragment>
      {hasData ? (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <XAxis
              dataKey="monthName"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar
              dataKey="ordersTotal"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex flex-1 flex-row items-center justify-center">
          <span className="text-lg font-bold">No data to be shown</span>
        </div>
      )}
    </React.Fragment>
  );
}
