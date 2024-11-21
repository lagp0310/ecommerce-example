"use client";

import React from "react";
import { useMany } from "@refinedev/core";
import { useTable, List } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";

export const CartList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, line_items(id, products(name), quantity)",
    },
  });

  const { data: customerData, isLoading: customerIsLoading } = useMany({
    resource: "customers",
    ids: tableProps?.dataSource?.map((item) => item?.customer) ?? [],
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

  const { data: currencyData, isLoading: currencyIsLoading } = useMany({
    resource: "currencies",
    ids: tableProps?.dataSource?.map((item) => item?.currency) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  console.log(tableProps.dataSource);

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["customer"]}
          title="Customer"
          render={(value) => {
            const customer = customerData?.data?.find(
              (item) => item.id === value
            );
            const fullName = `${customer?.first_name} ${customer?.last_name}`;

            return customerIsLoading ? <>Loading...</> : fullName;
          }}
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
          dataIndex={["currency"]}
          title="Currency"
          render={(value) => {
            const currency = currencyData?.data?.find(
              (item) => item.id === value
            );
            const composedName = `${currency?.name} (${currency?.three_letter_code})`;

            return currencyIsLoading ? (
              <>Loading...</>
            ) : (
              <Tag>{composedName}</Tag>
            );
          }}
        />
        <Table.Column
          dataIndex={["line_items"]}
          title="Line Items"
          render={(_value, record) => {
            const lineItems = record?.line_items;
            const tags = lineItems?.map(({ products, quantity }, index) => {
              const composedName = `${products?.name} (${quantity})`;
              return <Tag key={index}>{composedName}</Tag>;
            });

            return currencyIsLoading ? (
              <>Loading...</>
            ) : (
              <div className="flex gap-y-1 flex-wrap">{tags}</div>
            );
          }}
        />
      </Table>
    </List>
  );
};
