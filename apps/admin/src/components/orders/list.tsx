"use client";

import React from "react";
import { BaseRecord, useMany } from "@refinedev/core";
import { useTable, List, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export const OrderList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: cartData, isLoading: cartIsLoading } = useMany({
    resource: "carts",
    ids: tableProps?.dataSource?.map((item) => item?.cart) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  const { data: billingAddressData, isLoading: billingAddressIsLoading } =
    useMany({
      resource: "addresses",
      ids: tableProps?.dataSource?.map((item) => item?.billing_address) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

  const { data: shippingAddressData, isLoading: shippingAddressIsLoading } =
    useMany({
      resource: "addresses",
      ids: tableProps?.dataSource?.map((item) => item?.shipping_address) ?? [],
      queryOptions: {
        enabled: !!tableProps?.dataSource,
      },
    });

  return (
    <List
      createButtonProps={{ icon: <PlusIcon className="h-4 w-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["cart"]}
          title="Cart"
          render={() =>
            cartIsLoading ? <>Loading...</> : cartData?.data?.at(0)?.id
          }
        />
        <Table.Column
          dataIndex="billing_address"
          title="Billing Address"
          render={() =>
            billingAddressIsLoading ? (
              <>Loading...</>
            ) : (
              billingAddressData?.data?.at(0)?.address
            )
          }
        />
        <Table.Column
          dataIndex="shipping_address"
          title="Shipping Address"
          render={() =>
            shippingAddressIsLoading ? (
              <>Loading...</>
            ) : (
              shippingAddressData?.data?.at(0)?.address
            )
          }
        />
        <Table.Column dataIndex="notes" title="Notes" />
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
