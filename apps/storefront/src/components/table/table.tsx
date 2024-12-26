"use client";

import React from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export type TableProps = React.HTMLProps<HTMLTableElement>;
export type TableHeadProps = React.HTMLProps<HTMLTableSectionElement>;
export type TableBodyProps = React.HTMLProps<HTMLTableSectionElement>;
export type TableFooterProps = React.HTMLProps<HTMLTableSectionElement>;

export type Props<T = unknown> = {
  columns: ColumnDef<T, any>[];
  defaultData: T[];
} & {
  tableProps?: TableProps;
  tableHeadProps?: TableHeadProps;
  tableBodyProps?: TableBodyProps;
  tableFooterProps?: TableFooterProps;
};

export function Table({
  columns,
  defaultData,
  tableProps,
  tableHeadProps,
  tableBodyProps,
  tableFooterProps,
}: Props) {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table {...tableProps}>
      <thead {...tableHeadProps}>
        {table.getHeaderGroups().map(({ headers, id }) => (
          <tr key={id}>
            {headers.map(({ id, isPlaceholder, column, getContext }) => (
              <th key={id}>
                {isPlaceholder
                  ? null
                  : flexRender(column.columnDef.header, getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...tableBodyProps}>
        {table.getRowModel().rows.map(({ id, getVisibleCells }) => (
          <tr key={id}>
            {getVisibleCells().map(({ column, getContext, id }) => (
              <td key={id}>
                {flexRender(column.columnDef.cell, getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot {...tableFooterProps}>
        {table.getFooterGroups().map(({ headers, id }) => (
          <tr key={id}>
            {headers.map(({ column, getContext, id, isPlaceholder }) => (
              <th key={id}>
                {isPlaceholder
                  ? null
                  : flexRender(column.columnDef.footer, getContext())}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}
