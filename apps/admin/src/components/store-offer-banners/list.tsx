"use client";

import React from "react";
import { useTable, List, UrlField } from "@refinedev/antd";
import { Table } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";

export const StoreOfferBannerList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, banner_types(type), stores(name)",
    },
  });

  return (
    <List
      headerButtons={[]}
      title="Store Offer Banners"
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
        <Table.Column dataIndex="header" title="Header" />
        <Table.Column dataIndex="cta_text" title="CTA Text" />
        <Table.Column
          dataIndex={["cta_url"]}
          title="CTA URL"
          render={(value: string) => <UrlField value={value} />}
        />
        <Table.Column
          dataIndex={["banner_type"]}
          title="Banner Type"
          render={(_value, record) => {
            const bannerType = record?.banner_types;
            return <span>{bannerType?.type}</span>;
          }}
        />
        <Table.Column dataIndex="subtitle" title="Subtitle" />
        <Table.Column dataIndex="subtitle_remark" title="Subtitle Remark" />
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
