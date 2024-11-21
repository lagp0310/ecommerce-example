"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";

export const PaymentList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["cart"]}
          title="Cart"
          render={(_value, record) => record?.cart}
        />
      </Table>
    </List>
  );
};
