"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";

export const LocaleList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex={["locale"]} title="Locale" />
        <Table.Column dataIndex="locale_name" title="Locale Name" />
      </Table>
    </List>
  );
};
