"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import { useTable, List, EditButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export const CurrencyList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List
      createButtonProps={{ icon: <PlusIcon className="h-4 w-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="three_letter_code" title="Three Letter Code" />
        <Table.Column dataIndex="numeric_id" title="Numeric ID" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.id}
                icon={<PencilSquareIcon className="h-4 w-4 text-gray-500" />}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
