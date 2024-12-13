"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import { useTable, List, EditButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/solid";

export const PaymentMethodTypeList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List
      title="Payment Method Types"
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="type" title="Type" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.id}
                icon={<PencilSquareIcon className="size-4 text-gray-500" />}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
