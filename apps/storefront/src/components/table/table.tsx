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

type Props<T = unknown> = {
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
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...tableBodyProps}>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot {...tableFooterProps}>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}
