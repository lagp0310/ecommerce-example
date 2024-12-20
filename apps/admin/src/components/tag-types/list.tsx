"use client";

import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@heroicons/react/24/solid";

export const TagTypeList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List
      headerButtons={[]}
      createButtonProps={{
        icon: <PlusIcon className="size-4 text-white" />,
      }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" className="w-[35%]" />
        <Table.Column
          dataIndex="type"
          title="Type"
          render={(value) => (
            <span
              className={cn(
                "font-normal rounded-[4px] px-2 py-[3px] truncate whitespace-break-spaces capitalize",
                {
                  "bg-blue-500 text-white": value === "info",
                  "bg-danger text-white": value === "danger",
                  "bg-success text-white": value === "success",
                }
              )}
            >
              {value}
            </span>
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
