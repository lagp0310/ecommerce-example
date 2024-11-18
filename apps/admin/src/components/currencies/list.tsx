"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import { useTable, List, EditButton, DateField } from "@refinedev/antd";
import { Table, Space } from "antd";

export const CurrencyList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="three_letter_code" title="Three Letter Code" />
        <Table.Column dataIndex="numeric_id" title="Numeric ID" />
        <Table.Column
          dataIndex={["created_at"]}
          title="Created At"
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
