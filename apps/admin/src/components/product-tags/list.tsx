"use client";

import React from "react";
import { useTable, List, BooleanField } from "@refinedev/antd";
import { Table, Tag } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

export const ProductTagList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, products(name), tag_types(type)",
    },
  });

  return (
    <List
      headerButtons={[]}
      createButtonProps={{
        icon: <PlusIcon className="size-4 text-white" />,
      }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["product"]}
          title="Product"
          render={(_value, record) => {
            const product = record?.products;
            return <span>{product?.name}</span>;
          }}
        />
        <Table.Column
          dataIndex="tag"
          title="Tag"
          render={(value) => <Tag>{value}</Tag>}
        />
        <Table.Column
          dataIndex={["type"]}
          title="Type"
          render={(_value, record) => {
            const tag = record?.tag_types;
            const type = tag?.type;

            return (
              <span
                className={cn(
                  "font-normal rounded-[4px] px-2 py-[3px] truncate whitespace-break-spaces capitalize",
                  {
                    "bg-blue-500 text-white": type === "info",
                    "bg-danger text-white": type === "danger",
                    "bg-success text-white": type === "success",
                  }
                )}
              >
                {tag?.type}
              </span>
            );
          }}
        />
        <Table.Column
          dataIndex={["is_general_tag"]}
          title="Is General Tag"
          render={(value: boolean) => <BooleanField value={value} />}
        />
        <Table.Column
          dataIndex={["is_discount_tag"]}
          title="Is Discount Tag"
          render={(value: boolean) => <BooleanField value={value} />}
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
