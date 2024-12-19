"use client";

import React from "react";
import { useTable, List, ImageField } from "@refinedev/antd";
import { Table } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";

export const StoreFeatureList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, stores(name)",
    },
  });

  return (
    <List
      title="Store Features"
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
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
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex={["icon_url"]}
          title="Icon"
          render={(value: string) => (
            <ImageField style={{ maxWidth: "100px" }} value={value} />
          )}
        />
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
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
                icon={<TrashIcon className="size-4 text-red-500" />}
              />
            </Space>
          )}
        /> */}
      </Table>
    </List>
  );
};
