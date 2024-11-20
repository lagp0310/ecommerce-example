"use client";

import React from "react";
import { BaseRecord, useMany } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  UrlField,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export const StoreHeaderBannerList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: bannerTypeData, isLoading: bannerTypeIsLoading } = useMany({
    resource: "banner_types",
    ids: tableProps?.dataSource?.map((item) => item?.banner_type) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List
      title="Store Header Banners"
      createButtonProps={{ icon: <PlusIcon className="h-4 w-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column dataIndex="cta_text" title="CTA Text" />
        <Table.Column
          dataIndex={["cta_url"]}
          title="CTA URL"
          render={(value: any) => <UrlField value={value} />}
        />
        <Table.Column
          dataIndex={["banner_type"]}
          title="Banner Type"
          render={() =>
            bannerTypeIsLoading ? (
              <>Loading...</>
            ) : (
              bannerTypeData?.data?.at(0)?.type
            )
          }
        />
        <Table.Column dataIndex="subtitle" title="Subtitle" />
        <Table.Column dataIndex="subtitle_remark" title="Subtitle Remark" />
        <Table.Column
          dataIndex="subtitle_complement"
          title="Subtitle Complement"
        />
        <Table.Column
          dataIndex={["created_at"]}
          title="Created At"
          render={(value: any) => <DateField value={value} />}
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
