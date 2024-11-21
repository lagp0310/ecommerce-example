"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";

export const TransactionList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["payment_method"]}
          title="Payment Method"
          render={(_value, record) => <span>{record?.payment_method}</span>}
        />
        <Table.Column dataIndex="amount" title="Amount" />
      </Table>
    </List>
  );
};
