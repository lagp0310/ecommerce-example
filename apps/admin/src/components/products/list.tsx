"use client";

import React from "react";
import { BaseRecord, useMany } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const ProductList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: currencyData, isLoading: currencyIsLoading } = useMany({
    resource: "currencies",
    ids: tableProps?.dataSource?.map((item) => item?.currency) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
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
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="price" title="Price" />
        <Table.Column
          dataIndex={["currency"]}
          title="Currency"
          render={(value) =>
            currencyIsLoading ? (
              <>Loading...</>
            ) : (
              currencyData?.data?.find((item) => item.id === value)?.name
            )
          }
        />
        <Table.Column dataIndex="rating" title="Rating" />
        <Table.Column
          dataIndex={["created_at"]}
          title="Created At"
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column dataIndex="sku" title="SKU" />
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
        <Table.Column dataIndex="description" title="Description" />
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
