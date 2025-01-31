"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";

export const CurrencyList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List
      headerButtons={[]}
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="three_letter_code" title="Three Letter Code" />
        <Table.Column dataIndex="numeric_id" title="Numeric ID" />
        {/* <Table.Column
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
        /> */}
      </Table>
    </List>
  );
};
