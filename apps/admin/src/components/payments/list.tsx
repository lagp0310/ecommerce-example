"use client";

import React from "react";
import { useMany } from "@refinedev/core";
import { useTable, List } from "@refinedev/antd";
import { Table, Space } from "antd";

export const PaymentList = () => {
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
          title="Actions"
          dataIndex="actions"
          render={() => <Space></Space>}
        />
      </Table>
    </List>
  );
};
