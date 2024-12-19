"use client";

import React from "react";
import { useTable, List, BooleanField } from "@refinedev/antd";
import { Table } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";

export const PaymentMethodList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, stores(name), payment_method_types(type)",
    },
  });

  return (
    <List
      title="Payment Methods"
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["store"]}
          title="Store"
          render={(_value, record) => {
            const store = record?.stores;
            return <span>{store?.name}</span>;
          }}
        />
        <Table.Column
          dataIndex={["payment_method_type"]}
          title="Payment Method Type"
          render={(_value, record) => {
            const paymentMethodType = record?.payment_method_types;
            return <span>{paymentMethodType?.type}</span>;
          }}
        />
        <Table.Column
          dataIndex={["is_active"]}
          title="Is Active"
          render={(value: boolean) => (
            <div className="flex flex-1 items-center justify-center">
              <div className="flex flex-1 justify-center">
                <BooleanField value={value} />
              </div>
            </div>
          )}
        />
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
