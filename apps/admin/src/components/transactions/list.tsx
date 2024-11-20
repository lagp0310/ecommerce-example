"use client";

import React from "react";
import { BaseRecord, useMany } from "@refinedev/core";
import { useTable, List } from "@refinedev/antd";
import { Table, Space } from "antd";

export const TransactionList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: paymentMethodData, isLoading: paymentMethodIsLoading } =
    useMany({
      resource: "payment_methods",
      ids: tableProps?.dataSource?.map((item) => item?.payment_method) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["payment_method"]}
          title="Payment Method"
          render={() =>
            paymentMethodIsLoading ? (
              <>Loading...</>
            ) : (
              paymentMethodData?.data?.at(0)?.id
            )
          }
        />
        <Table.Column dataIndex="amount" title="Amount" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => <Space></Space>}
        />
      </Table>
    </List>
  );
};
