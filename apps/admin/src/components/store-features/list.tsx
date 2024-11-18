"use client";

import React from "react";
import { BaseRecord, useMany } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  ImageField,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const StoreFeatureList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: storeData, isLoading: storeIsLoading } = useMany({
    resource: "stores",
    ids: tableProps?.dataSource?.map((item) => item?.store) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex={["icon_url"]}
          title="Icon"
          render={(value: any) => (
            <ImageField style={{ maxWidth: "100px" }} value={value} />
          )}
        />
        <Table.Column
          dataIndex={["store"]}
          title="Store"
          render={(value) =>
            storeIsLoading ? (
              <>Loading...</>
            ) : (
              storeData?.data?.find((item) => item.id === value)?.name
            )
          }
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
