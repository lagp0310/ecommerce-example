import { baseSupabaseClient } from "@/providers/data/data-provider";
import type {
  DashboardDataResponse,
  OrderSummary,
  DashboardOrder,
} from "@/types/types";
import React from "react";

export function useDashboardData() {
  const [dashboardMainMetrics, setDashboardMainMetrics] =
    React.useState<DashboardDataResponse | null>(null);
  const [ordersPerMonth, setOrdersPerMonth] = React.useState<
    OrderSummary[] | null
  >(null);
  const [latestOrders, setLatestOrders] = React.useState<
    DashboardOrder[] | null
  >(null);

  const getDashboardData = React.useCallback(
    async (postgresFunctionName: string) => {
      const response = await baseSupabaseClient.rpc(postgresFunctionName);

      if (response) {
        const { data, error } = response as {
          data?: DashboardDataResponse | OrderSummary[] | DashboardOrder[];
          error?: unknown;
        };

        if (error) {
          console.error(error);
          throw new Error((error as { message?: string }).message);
        }

        return data;
      } else {
        throw new Error("Failed to get dashboard data");
      }
    },
    []
  );
  const getDashboardMainMetricsData = React.useCallback(async () => {
    const data = (await getDashboardData(
      "get_dashboard_data"
    )) as DashboardDataResponse;

    if (!data) {
      return setDashboardMainMetrics(null);
    }

    setDashboardMainMetrics(data);
  }, [getDashboardData]);
  const getOrdersPerMonthData = React.useCallback(async () => {
    const data = (await getDashboardData(
      "get_orders_summary_per_month"
    )) as OrderSummary[];

    if (!data) {
      return setOrdersPerMonth(null);
    }

    setOrdersPerMonth(data);
  }, [getDashboardData]);
  const getLatestOrdersData = React.useCallback(async () => {
    const data = (await getDashboardData(
      "get_latest_orders"
    )) as DashboardOrder[];

    if (!data) {
      return setLatestOrders(null);
    }

    setLatestOrders(data);
  }, [getDashboardData]);
  React.useEffect(() => {
    getDashboardMainMetricsData();
    getOrdersPerMonthData();
    getLatestOrdersData();
  }, [getDashboardMainMetricsData, getLatestOrdersData, getOrdersPerMonthData]);

  const hasMonthlyRevenueData = React.useMemo(
    () =>
      typeof dashboardMainMetrics?.result_orders_total === "number" &&
      typeof dashboardMainMetrics?.orders_amount_difference_percentage ===
        "number" &&
      typeof dashboardMainMetrics?.is_orders_amount_percentage_positive ===
        "boolean",
    [
      dashboardMainMetrics?.is_orders_amount_percentage_positive,
      dashboardMainMetrics?.orders_amount_difference_percentage,
      dashboardMainMetrics?.result_orders_total,
    ]
  );
  const hasMonthlySubscriptionsData = React.useMemo(
    () =>
      typeof dashboardMainMetrics?.result_customers_count === "number" &&
      typeof dashboardMainMetrics?.customers_difference_percentage ===
        "number" &&
      typeof dashboardMainMetrics?.is_customers_difference_percentage_positive ===
        "boolean",
    [
      dashboardMainMetrics?.customers_difference_percentage,
      dashboardMainMetrics?.is_customers_difference_percentage_positive,
      dashboardMainMetrics?.result_customers_count,
    ]
  );
  const hasMonthlyOrdersData = React.useMemo(
    () =>
      typeof dashboardMainMetrics?.result_orders_total === "number" &&
      typeof dashboardMainMetrics?.orders_difference_percentage === "number" &&
      typeof dashboardMainMetrics?.is_orders_percentage_positive === "boolean",
    [
      dashboardMainMetrics?.is_orders_percentage_positive,
      dashboardMainMetrics?.orders_difference_percentage,
      dashboardMainMetrics?.result_orders_total,
    ]
  );

  return {
    dashboardMainMetrics,
    ordersPerMonth,
    latestOrders,
    hasMonthlyRevenueData,
    hasMonthlySubscriptionsData,
    hasMonthlyOrdersData,
  };
}
