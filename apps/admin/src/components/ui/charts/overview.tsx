"use client";

import React from "react";
import { type OrderSummary } from "@/types/types";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getMonthName } from "@/lib/utils";
import { EmptyData } from "../illustrations/empty-data";

const chartConfig = {
  ordersTotal: {
    label: "Orders Total",
  },
} satisfies ChartConfig;

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
        monthName: getMonthName(index + 1, false),
        shortMonthName: monthData?.result_month_name ?? getMonthName(index + 1),
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
          <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
            <BarChart data={chartData}>
              <XAxis
                dataKey="shortMonthName"
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
              <ChartTooltip
                labelFormatter={(_value, payload) => (
                  <span>{payload?.at(0)?.payload?.monthName}</span>
                )}
                formatter={(value) => (
                  <span>{`${chartConfig.ordersTotal.label}: $${new Intl.NumberFormat(
                    "en-US",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  ).format(parseFloat(value.toString()))}`}</span>
                )}
                content={<ChartTooltipContent />}
              />
              <Bar
                dataKey="ordersTotal"
                fill="currentColor"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-y-4 text-center">
          <EmptyData className="h-16 w-16 md:h-20 md:w-20" />
          <span className="text-lg font-bold">No data to be shown</span>
        </div>
      )}
    </React.Fragment>
  );
}
