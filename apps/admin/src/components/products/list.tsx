"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import { useTable, List, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import type { Category, ProductTag } from "@/types/types";

export const ProductList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select:
        "*, currencies(name, three_letter_code), stores(name), categories(name), tags(tag)",
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
          dataIndex={["categories"]}
          title="Categories"
          render={(_value, record) => {
            const categories = record?.categories;
            const categoryTags = (categories as Category[])?.map(
              ({ name }, index) => <Tag key={index}>{name}</Tag>
            );

            return <div className="flex flex-wrap gap-y-1">{categoryTags}</div>;
          }}
        />
        <Table.Column
          dataIndex={["tags"]}
          title="Tags"
          render={(_value, record) => {
            const tagsArray = record?.tags;
            const tags = (tagsArray as ProductTag[])?.map(({ tag }, index) => (
              <Tag key={index}>{tag}</Tag>
            ));

            return <div className="flex flex-wrap gap-y-1">{tags}</div>;
          }}
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
