"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/ui/charts/overview";
import { RecentSales } from "@/components/ui/recent-sales";
import {
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useCurrentUser } from "@/context/user-context";
import { useDashboardData } from "@/hooks/use-dashboard-data";

export default function DashboardPage() {
  const {
    dashboardMainMetrics,
    ordersPerMonth,
    latestOrders,
    hasMonthlyRevenueData,
    hasMonthlySubscriptionsData,
    hasMonthlyOrdersData,
  } = useDashboardData();

  const { usersData } = useCurrentUser();
  const welcomeMessage = React.useMemo(
    () =>
      `Welcome back${!!usersData && usersData?.firstName ? `, ${usersData?.firstName}` : ""}!`,
    [usersData]
  );

  return (
    <div className="flex flex-1 flex-col py-4">
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex flex-col justify-center gap-y-1">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <h3 className="text-base font-medium tracking-normal">
              {welcomeMessage}
            </h3>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="h-full justify-start sm:justify-center">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger
                value="analytics"
                disabled
                className="disabled:pointer-events-auto disabled:hover:cursor-not-allowed"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                disabled
                className="disabled:pointer-events-auto disabled:hover:cursor-not-allowed"
              >
                Reports
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                disabled
                className="disabled:pointer-events-auto disabled:hover:cursor-not-allowed"
              >
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Revenue
                    </CardTitle>
                    <CurrencyDollarIcon className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    {hasMonthlyRevenueData ? (
                      <React.Fragment>
                        <div className="text-2xl font-bold">{`$${dashboardMainMetrics?.result_orders_total}`}</div>
                        <p className="text-xs text-muted-foreground">
                          {`${dashboardMainMetrics?.is_orders_amount_percentage_positive ? "+" : ""}${dashboardMainMetrics?.orders_amount_difference_percentage}% from last month`}
                        </p>
                      </React.Fragment>
                    ) : (
                      <span className="text-lg font-bold">No data yet</span>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Subscriptions
                    </CardTitle>
                    <UserGroupIcon className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    {hasMonthlySubscriptionsData ? (
                      <React.Fragment>
                        <div className="text-2xl font-bold">{`${dashboardMainMetrics?.result_customers_count}`}</div>
                        <p className="text-xs text-muted-foreground">
                          {`${dashboardMainMetrics?.is_customers_difference_percentage_positive ? "+" : "-"}${dashboardMainMetrics?.customers_difference_percentage}% from last month`}
                        </p>
                      </React.Fragment>
                    ) : (
                      <span className="text-lg font-bold">No data yet</span>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Orders
                    </CardTitle>
                    <ShoppingBagIcon className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    {hasMonthlyOrdersData ? (
                      <React.Fragment>
                        <div className="text-2xl font-bold">{`${dashboardMainMetrics?.result_total_orders}`}</div>
                        <p className="text-xs text-muted-foreground">
                          {`${dashboardMainMetrics?.is_orders_percentage_positive ? "+" : "-"}${dashboardMainMetrics?.orders_difference_percentage}% from last month`}
                        </p>
                      </React.Fragment>
                    ) : (
                      <span className="text-lg font-bold">No data yet</span>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Current Active Users
                    </CardTitle>
                    <CursorArrowRaysIcon className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-y-4 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 flex flex-1 flex-col">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex flex-1 h-full">
                    <Overview data={ordersPerMonth} />
                  </CardContent>
                </Card>
                <Card className="sm:col-span-4 lg:col-span-3 flex flex-1 flex-col">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex flex-1 h-full">
                    <RecentSales latestOrders={latestOrders} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
