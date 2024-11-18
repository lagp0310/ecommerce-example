"use client";

import React from "react";
import { useMany } from "@refinedev/core";
import { useTable, List, DateField } from "@refinedev/antd";
import { Table } from "antd";

export const LocaleList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: localeData, isLoading: localeIsLoading } = useMany({
    resource: "locales",
    ids: tableProps?.dataSource?.map((item) => item?.locale) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex={["locale"]} title="Locale" />
        <Table.Column dataIndex="locale_name" title="Locale Name" />
        <Table.Column
          dataIndex={["created_at"]}
          title="Created At"
          render={(value: any) => <DateField value={value} />}
        />
      </Table>
    </List>
  );
};
