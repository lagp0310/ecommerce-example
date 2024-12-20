"use client";

import React from "react";
import { useMany } from "@refinedev/core";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";
import { PlusIcon } from "@heroicons/react/24/solid";

export const StoreList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: businessData, isLoading: businessIsLoading } = useMany({
    resource: "businesses",
    ids: tableProps?.dataSource?.map((item) => item?.business) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List
      headerButtons={[]}
      createButtonProps={{ icon: <PlusIcon className="size-4 text-white" /> }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column
          dataIndex={["business"]}
          title="Business"
          render={(value) =>
            businessIsLoading ? (
              <>Loading...</>
            ) : (
              businessData?.data?.find((item) => item.id === value)?.name
            )
          }
        />
        <Table.Column dataIndex="name" title="Store Name" />
        <Table.Column dataIndex="description" title="Description" />
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
