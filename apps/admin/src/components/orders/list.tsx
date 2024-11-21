"use client";

import React from "react";
import { useMany } from "@refinedev/core";
import { useTable, List } from "@refinedev/antd";
import { Table, Space } from "antd";

export const OrderList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: cartData, isLoading: cartIsLoading } = useMany({
    resource: "carts",
    ids: tableProps?.dataSource?.map((item) => item?.cart) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  const { data: billingAddressData, isLoading: billingAddressIsLoading } =
    useMany({
      resource: "addresses",
      ids: tableProps?.dataSource?.map((item) => item?.billing_address) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

  const { data: shippingAddressData, isLoading: shippingAddressIsLoading } =
    useMany({
      resource: "addresses",
      ids: tableProps?.dataSource?.map((item) => item?.shipping_address) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["cart"]}
          title="Cart"
          render={() =>
            cartIsLoading ? <>Loading...</> : cartData?.data?.at(0)?.id
          }
        />
        <Table.Column
          dataIndex="billing_address"
          title="Billing Address"
          render={() =>
            billingAddressIsLoading ? (
              <>Loading...</>
            ) : (
              billingAddressData?.data?.at(0)?.address
            )
          }
        />
        <Table.Column
          dataIndex="shipping_address"
          title="Shipping Address"
          render={() =>
            shippingAddressIsLoading ? (
              <>Loading...</>
            ) : (
              shippingAddressData?.data?.at(0)?.address
            )
          }
        />
        <Table.Column dataIndex="notes" title="Notes" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={() => <Space></Space>}
        />
      </Table>
    </List>
  );
};
