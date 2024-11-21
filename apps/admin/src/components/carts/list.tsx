"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table, Tag } from "antd";

export const CartList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select:
        "*, customers(first_name, last_name), currencies(name, three_letter_code), line_items(id, products(name), quantity), stores(name)",
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["customer"]}
          title="Customer"
          render={(_value, record) => {
            const customer = record?.customers;
            return (
              <span>{`${customer?.first_name} ${customer?.last_name}`}</span>
            );
          }}
        />
        <Table.Column
          dataIndex={["store"]}
          title="Store"
          render={(_value, record) => {
            const store = record?.stores;
            return <span>{store?.name}</span>;
          }}
        />
        <Table.Column
          dataIndex={["currency"]}
          title="Currency"
          render={(_value, record) => {
            const currency = record?.currencies;
            return (
              <span>{`${currency?.name} (${currency?.three_letter_code})`}</span>
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

            return <div className="flex gap-y-1 flex-wrap">{tags}</div>;
          }}
        />
      </Table>
    </List>
  );
};
