"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  ImageField,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export const CategoryList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, stores(name)",
    },
  });

  return (
    <List
      createButtonProps={{ icon: <PlusIcon className="h-4 w-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex={["store"]}
          title="Store"
          render={(_value, record) => {
            const store = record?.stores;
            return <span>{store?.name}</span>;
          }}
        />
        <Table.Column
          dataIndex={["image_url"]}
          title="Image"
          render={(value: string) => (
            <ImageField style={{ maxWidth: "100px" }} value={value} />
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
