"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  BooleanField,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export const PaymentMethodList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, stores(name)",
    },
  });

  return (
    <List
      title="Payment Methods"
      createButtonProps={{ icon: <PlusIcon className="h-4 w-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["store"]}
          title="Store"
          render={(_value, record) => {
            const store = record?.stores;
            return <span>{store?.name}</span>;
          }}
        />
        <Table.Column
          dataIndex={["is_active"]}
          title="Is Active"
          render={(value: boolean) => (
            <div className="flex flex-1 items-center jutify-center">
              <div className="flex flex-1 justify-center">
                <BooleanField value={value} />
              </div>
            </div>
          )}
        />
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
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
                icon={<TrashIcon className="h-4 w-4 text-red-500" />}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
