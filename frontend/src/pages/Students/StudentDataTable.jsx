import {
      flexRender,
      getCoreRowModel,
      getFilteredRowModel,
      getPaginationRowModel,
      getSortedRowModel,
      useReactTable,
} from "@tanstack/react-table";

import {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table";

import { useState } from "react";

export function StudentDataTable({ columns, data }) {
      const [sorting, setSorting] = useState([]);
      const [globalFilter, setGlobalFilter] = useState("");

      const table = useReactTable({
            data,
            columns,
            state: {
                  sorting,
                  globalFilter,
            },

            onSortingChange: setSorting,
            onGlobalFilterChange: setGlobalFilter,

            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            getPaginationRowModel: getPaginationRowModel(),

            initialState: {
                  pagination: {
                        pageSize: 10,
                  },
            },
      });

      return (
            <div className="space-y-4">

                  {/* Search */}
                  <div className="flex items-center justify-between">
                        <input
                              type="text"
                              placeholder="Search students..."
                              value={globalFilter ?? ""}
                              onChange={(e) => setGlobalFilter(e.target.value)}
                              className="w-full max-w-sm rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
                        />
                  </div>

                  {/* Table */}
                  <div className="rounded-md border overflow-hidden">
                        <Table>
                              <TableHeader>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                          <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => (
                                                      <TableHead key={header.id}>
                                                            {header.isPlaceholder ? null : (
                                                                  <div
                                                                        className={
                                                                              header.column.getCanSort()
                                                                                    ? "cursor-pointer select-none flex items-center gap-2"
                                                                                    : ""
                                                                        }
                                                                        onClick={header.column.getToggleSortingHandler()}
                                                                  >
                                                                        {flexRender(
                                                                              header.column.columnDef.header,
                                                                              header.getContext()
                                                                        )}

                                                                        {/* Sorting indicator */}
                                                                        {{
                                                                              asc: " ↑",
                                                                              desc: " ↓",
                                                                        }[header.column.getIsSorted()] ?? ""}
                                                                  </div>
                                                            )}
                                                      </TableHead>
                                                ))}
                                          </TableRow>
                                    ))}
                              </TableHeader>

                              <TableBody>
                                    {table.getRowModel().rows.length ? (
                                          table.getRowModel().rows.map((row) => (
                                                <TableRow key={row.id}>
                                                      {row.getVisibleCells().map((cell) => (
                                                            <TableCell key={cell.id}>
                                                                  {flexRender(
                                                                        cell.column.columnDef.cell,
                                                                        cell.getContext()
                                                                  )}
                                                            </TableCell>
                                                      ))}
                                                </TableRow>
                                          ))
                                    ) : (
                                          <TableRow>
                                                <TableCell
                                                      colSpan={columns.length}
                                                      className="h-24 text-center"
                                                >
                                                      No students found.
                                                </TableCell>
                                          </TableRow>
                                    )}
                              </TableBody>
                        </Table>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between py-4">

                        {/* Page information */}
                        <div className="text-sm text-muted-foreground">
                              Showing{" "}
                              {table.getRowModel().rows.length > 0
                                    ? table.getState().pagination.pageIndex *
                                    table.getState().pagination.pageSize +
                                    1
                                    : 0}{" "}
                              to{" "}
                              {Math.min(
                                    (table.getState().pagination.pageIndex + 1) *
                                    table.getState().pagination.pageSize,
                                    table.getFilteredRowModel().rows.length
                              )}{" "}
                              of {table.getFilteredRowModel().rows.length} students
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-2">
                              <button
                                    className="border rounded-md px-3 py-1 text-sm disabled:opacity-50"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                              >
                                    Previous
                              </button>

                              <span className="text-sm">
                                    Page {table.getState().pagination.pageIndex + 1} of{" "}
                                    {table.getPageCount()}
                              </span>

                              <button
                                    className="border rounded-md px-3 py-1 text-sm disabled:opacity-50"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                              >
                                    Next
                              </button>
                        </div>
                  </div>
            </div>
      );
}