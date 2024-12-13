"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import { useTable, List, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export const ProductList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, currencies(name, three_letter_code), stores(name)",
    },
  });

  return (
    <List
      createButtonProps={{
        icon: <PlusIcon className="size-4 text-white" />,
      }}
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
        <Table.Column dataIndex="sku" title="SKU" />
        <Table.Column dataIndex="available_quantity" title="Stock" />
        <Table.Column dataIndex="name" title="Product Name" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex={["currency"]}
          title="Currency"
          render={(_value, record) => {
            const currency = record?.currencies;
            return (
              <span>{`${currency?.name} (${currency?.three_letter_code})`}</span>
            );
          }}
        />
        <Table.Column dataIndex="price" title="Price" />
        <Table.Column dataIndex="discounted_price" title="Discounted Price" />
        <Table.Column dataIndex="discounted_until" title="Discounted Until" />
        {/* <Table.Column
          dataIndex={["image_url"]}
          title="Image"
          render={(value: string) => (
            <ImageField style={{ maxWidth: "100px" }} value={value} />
          )}
        /> */}
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
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
                icon={<TrashIcon className="size-4 text-red-500" />}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
