"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";

export const CustomerList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, emails(email), phone_numbers(phone_number)",
    },
  });

  return (
    <List
      headerButtons={[]}
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
    >
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
        <Table.Column dataIndex="billing_address" title="Billing Address" />
        <Table.Column dataIndex="shipping_address" title="Shipping Address" />
        <Table.Column dataIndex="birth_date" title="Birth Date" />
        {/* <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.id}
                icon={<PencilSquareIcon className="size-4 text-gray-500" />}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
                icon={<TrashIcon className="size-4 text-red-500" />}
              />
            </Space>
          )}
        /> */}
      </Table>
    </List>
  );
};
