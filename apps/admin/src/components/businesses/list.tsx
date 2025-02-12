"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table, Tag } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Business } from "@/types/types";

export const BusinessList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, business_currency(currency(name, three_letter_code))",
    },
  });

  return (
    <List
      headerButtons={[]}
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column
          dataIndex={"currencies"}
          title="Currencies"
          render={(_value, record) => (
            <>
              {(record as Business)?.business_currency?.map(
                ({ currency: { name, three_letter_code } }, index) => (
                  <Tag key={index}>{`${name} (${three_letter_code})`}</Tag>
                )
              )}
            </>
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
            </Space>
          )}
        /> */}
      </Table>
    </List>
  );
};
