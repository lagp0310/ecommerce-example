"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  UrlField,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export const StoreImageBannerList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, banner_types(type)",
    },
  });

  return (
    <List
      title="Store Image Banners"
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="header" title="Header" />
        <Table.Column dataIndex="header_remark" title="Header Remark" />
        <Table.Column dataIndex="cta_text" title="CTA Text" />
        <Table.Column
          dataIndex={["cta_url"]}
          title="CTA URL"
          render={(value: string) => <UrlField value={value} />}
        />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex={["banner_type"]}
          title="Banner Type"
          render={(_value, record) => {
            const bannerType = record?.banner_types;
            return <span>{bannerType?.type}</span>;
          }}
        />
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
