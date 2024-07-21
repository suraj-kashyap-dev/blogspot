import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";

const BaseDatagrid = ({
  headers,
  rowsData,
  handleEdit,
  handleDelete,
  appendColumns = [],
  forceShowPreviousButton = false,
  forceShowNextButton = false,
}) => {
  const columns = useMemo(
    () => [
      ...headers,
      ...appendColumns,
      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <div className="flex gap-x-2">
            <button
              onClick={() => handleEdit(row.original)}
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <i className="fa-solid fa-pencil-alt"></i> Edit
            </button>
            <button
              onClick={() => handleDelete(row.original)}
              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <i className="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        ),
      },
    ],
    [headers, handleEdit, handleDelete]
  );

  const data = useMemo(() => rowsData, [rowsData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    previousPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <div className="mt-7 flex items-center justify-between gap-4 max-md:flex-wrap">
        <div className="flex gap-x-1">
          <div className="flex w-full items-center gap-x-1">
            <div className="flex max-w-[445px] items-center max-sm:w-full max-sm:max-w-full">
              <div className="relative w-full">
                <GlobalFilter
                  filter={globalFilter}
                  setFilter={setGlobalFilter}
                />
              </div>
            </div>
            <div className="ltr:pl-2.5 rtl:pr-2.5">
              <p className="text-sm font-light text-gray-800 dark:text-white">
                {page.length} Results
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          {canPreviousPage || forceShowPreviousButton ? (
            <div
              onClick={previousPage}
              className="inline-flex items-center justify-center w-8 h-8 cursor-pointer rounded-full border border-transparent text-gray-600 bg-gray-200 hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 ease-in-out"
            >
              <i className="fa-solid fa-caret-left text-sm" />

            </div>
          ) : (
            ""
          )}

          <div className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300">
            <span className="text-sm">
              {`Page ${pageIndex + 1} of ${pageOptions.length}`}
            </span>
          </div>

          {canNextPage || forceShowNextButton ? (
            <div
              onClick={nextPage}
              className="inline-flex items-center justify-center w-8 h-8 cursor-pointer rounded-full border border-transparent text-gray-600 bg-gray-200 hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 ease-in-out"
            >
              <i className="fa-solid fa-caret-right text-sm" />

            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="relative overflow-x-auto mt-5 rounded-sm border dark:border-gray-800 shadow-lg">
        <table
          {...getTableProps()}
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          style={{ tableLayout: "fixed" }}
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headerGroups.map((headerGroup, headerGroupIndex) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
                {headerGroup.headers.map((column, headerIndex) => (
                  <th
                    scope="col"
                    className="px-6 py-3"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={headerIndex}
                  >
                    <div className="flex float-left">
                      <span className="mr-2">{column.render("Header")}</span>
                      <span className="text-gray-800 dark:text-gray-300">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fa-solid fa-sort-up"></i>
                          ) : (
                            <i className="fa-solid fa-sort-down"></i>
                          )
                        ) : (
                          <i className="fa-solid fa-sort"></i>
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  {...row.getRowProps()}
                  key={rowIndex}
                >
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      className="px-6 py-4"
                      {...cell.getCellProps()}
                      key={cellIndex}
                    >
                      <div className="flex">{cell.render("Cell")}</div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BaseDatagrid;
