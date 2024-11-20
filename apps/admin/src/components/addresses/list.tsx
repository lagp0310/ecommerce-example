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

export const AddressList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: customerData, isLoading: customerIsLoading } = useMany({
    resource: "customers",
    ids: tableProps?.dataSource?.map((item) => item?.customer) ?? [],
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
        <Table.Column dataIndex={["address"]} title="Address" />
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
