"use client";

import React from "react";
import { BaseRecord, useMany } from "@refinedev/core";
import { useTable, List, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

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
          render={(_, record: BaseRecord) => <Space></Space>}
        />
      </Table>
    </List>
  );
};
