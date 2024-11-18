"use client";

import React from "react";
import { BaseRecord } from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  DeleteButton,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const CustomerList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, emails(email), phone_numbers(phone_number)",
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="first_name" title="First Name" />
        <Table.Column dataIndex="last_name" title="Last Name" />
        <Table.Column
          dataIndex={"email"}
          title="Email"
          render={(_value, record) => record?.emails?.at(0)?.email}
        />
        <Table.Column
          dataIndex={"phone_number"}
          title="Phone Number"
          render={(_value, record) =>
            record?.phone_numbers?.at(0)?.phone_number
          }
        />
        <Table.Column dataIndex="birth_date" title="Birth Date" />
        <Table.Column
          dataIndex={["created_at"]}
          title="Created At"
          render={(value: string) => <DateField value={value} />}
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
