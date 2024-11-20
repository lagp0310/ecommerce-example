"use client";

import React from "react";
import { BaseRecord, useMany } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  ImageField,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

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
    <List
      createButtonProps={{
        icon: <PlusIcon className="h-4 w-4 text-white" />,
      }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
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
        <Table.Column dataIndex="sku" title="SKU" />
        <Table.Column dataIndex="name" title="Product Name" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column dataIndex="price" title="Price" />
        <Table.Column dataIndex="discounted_price" title="Discounted Price" />
        <Table.Column dataIndex="discounted_until" title="Discounted Until" />
        <Table.Column
          dataIndex={["currency"]}
          title="Currency"
          render={(value) => {
            const currency = currencyData?.data?.find(
              (item) => item.id === value
            );
            const composedName = `${currency?.name} (${currency?.three_letter_code})`;

            return currencyIsLoading ? <>Loading...</> : composedName;
          }}
        />
        <Table.Column
          dataIndex={["image_url"]}
          title="Image"
          render={(value: any) => (
            <ImageField style={{ maxWidth: "100px" }} value={value} />
          )}
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
