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

export const StoreOfferBannerList = () => {
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
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="header" title="Header" />
        <Table.Column dataIndex="cta_text" title="CTA Text" />
        <Table.Column
          dataIndex={["cta_url"]}
          title="CTA URL"
          render={(value: any) => <UrlField value={value} />}
        />
        <Table.Column
          dataIndex={["banner_type"]}
          title="Banner Type"
          render={(value) => (
            <span title="Inferencer failed to render this field (Cannot find key)">
              Cannot Render
            </span>
          )}
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
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
