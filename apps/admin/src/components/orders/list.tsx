"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";

export const OrderList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select:
        "*, carts(customers(first_name, last_name, billing_address, shipping_address), stores(name))",
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["cart"]}
          title="Cart"
          render={(_value, record) => record?.cart}
        />
        <Table.Column
          dataIndex={["store"]}
          title="Store"
          render={(_value, record) => {
            const store = record?.carts?.stores;
            return <span>{store?.name}</span>;
          }}
        />
        <Table.Column
          dataIndex={["customer"]}
          title="Customer"
          render={(_value, record) => {
            const customer = record?.carts?.customers;
            return (
              <span>{`${customer?.first_name} ${customer?.last_name}`}</span>
            );
          }}
        />
        <Table.Column
          dataIndex={["billing_address"]}
          title="Billing Address"
          render={(_value, record) => {
            const customer = record?.carts?.customers;
            return <span>{customer?.billing_address}</span>;
          }}
        />
        <Table.Column
          dataIndex="shipping_address"
          title="Shipping Address"
          render={(_value, record) => {
            const customer = record?.carts?.customers;
            return <span>{customer?.shipping_address}</span>;
          }}
        />
        <Table.Column dataIndex="notes" title="Notes" />
      </Table>
    </List>
  );
};
