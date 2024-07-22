import React, { useState, useMemo, useEffect, useContext } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";
import Textinput from "@/components/ui/Textinput";

import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import Modal from "@/components/ui/Modal";
import ToasterComponent from "../../components/ToasterComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiEmotionUnhappyLine } from "react-icons/ri";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input
          type="checkbox"
          ref={resolvedRef}
          {...rest}
          className="table-checkbox"
        />
      </>
    );
  }
);

const Admin01 = () => {
  const COLUMNS = [
    {
      Header: "UserName",
      accessor: `title`,
      Cell: (row) => {
        return (
          <div>
            <span className="text-sm text-slate-600 dark:text-slate-300 normal-case">
              {row?.cell?.value}
            </span>
          </div>
        );
      },
    },

    {
      Header: "Email ID / Whatsapp",
      accessor: `email`,
      Cell: (row) => {
        return (
          <div className="inline-flex items-center">
            <span className="text-sm text-slate-600 dark:text-slate-300 normal-case">
              {row?.cell?.value}
            </span>
          </div>
        );
      },
    },
    {
      Header: "Password",
      accessor: `password`,
      Cell: (row) => {
        return (
          <div className="inline-flex items-center">
            <span className="text-sm text-slate-600 dark:text-slate-300 normal-case">
              {row?.cell?.value}
            </span>
          </div>
        );
      },
    },
    {
        Header: "Total Restaurant Revenue",
        accessor: `totalRestaurantRevenue`,
        Cell: (row) => {
          return (
            <div className="inline-flex items-center">
              <span className="text-sm text-slate-600 dark:text-slate-300 normal-case">
                {row?.cell?.value}
              </span>
            </div>
          );
        },
      },
      {
        Header: "Restaurant Profit",
        accessor: `restaurantProfit`,
        Cell: (row) => {
          return (
            <div className="inline-flex items-center">
              <span className="text-sm text-slate-600 dark:text-slate-300 normal-case">
                {row?.cell?.value}
              </span>
            </div>
          );
        },
      },
      {
        Header: "Revenue",
        accessor: `Revenue`,
        Cell: (row) => {
          return (
            <div className="inline-flex items-center">
              <span className="text-sm text-slate-600 dark:text-slate-300 normal-case">
                {row?.cell?.value}
              </span>
            </div>
          );
        },
      },
      {
        Header: "Profit",
        accessor: `Profit`,
        Cell: (row) => {
          return (
            <div className="inline-flex items-center">
              <span className="text-sm text-slate-600 dark:text-slate-300 normal-case">
                {row?.cell?.value}
              </span>
            </div>
          );
        },
      },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        const productId = row.original._id;
        return (
          <div className="flex space-x-3 rtl:space-x-reverse">
            <Tooltip
              content="Edit"
              placement="top"
              arrow
              animation="shift-away"
            >
              <button
                className="action-btn"
                type="button"
                onClick={() => setUpdate(true)}
              >
                <Icon icon="heroicons:pencil-square" />
              </button>
            </Tooltip>
            <Tooltip
              content="Delete"
              placement="top"
              arrow
              animation="shift-away"
            >
              <button
                className="action-btn"
                type="button"
                onClick={() => sethandleDeleteConfirms(true)}
              >
                <Icon icon="heroicons:trash" />
              </button>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const [productList, setproductList] = useState([]);
  const data = useMemo(() => productList, [productList]);
  const [handleDeleteConfirms, sethandleDeleteConfirms] = useState(false);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setproductList([
      {
        title: "Aaaaaaaa",
        email: "admin@gmail.com",
        password: "123456",
        totalRestaurantRevenue:"50",
        restaurantProfit:"200",
        Revenue:"23",
        Profit:"30"
      },
      {
        title: "Abc",
        email: "admin@gmail.com",
        password: "123456",
        totalRestaurantRevenue:"50",
        restaurantProfit:"200",
        Revenue:"23",
        Profit:"30"
      },
      {
        title: "Aaaaaaaa",
        email: "admin@gmail.com",
        password: "123456",
        totalRestaurantRevenue:"50",
        restaurantProfit:"200",
        Revenue:"23",
        Profit:"30"
      },
      {
        title: "Abc",
        email: "admin@gmail.com",
        password: "123456",
        totalRestaurantRevenue:"50",
        restaurantProfit:"200",
        Revenue:"23",
        Profit:"30"
      },
    ]);
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Card noborder>
        <div className="md:flex justify-between items-center mb-6">
          <h4 className="card-title">Admin01 List</h4>
          <div className="flex justify-between gap-4 items-center flex-wrap">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table
                className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                {...getTableProps()}
              >
                <thead className="border-t border-slate-100 dark:border-slate-800">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className="table-th"
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className=" divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                  {...getTableBodyProps()}
                >
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()} className="table-td">
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="flex space-x-2 rtl:space-x-reverse items-center">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Go
              </span>
              <span>
                <input
                  type="number"
                  className="form-control py-2"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                  style={{ width: "50px" }}
                />
              </span>
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Page{" "}
              <span>
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </span>
          </div>
          <ul className="flex items-center space-x-3 rtl:space-x-reverse">
            <li className=" text-center font-semibold text-[14px]">Total Revenue <br /><span>92</span></li>
            <li className=" text-center font-semibold text-[14px]">Total Profit <br /> <span>120</span></li>
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${
                  !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <Icon icon="heroicons-outline:chevron-left" />
              </button>
            </li>
            {pageOptions.map((page, pageIdx) => (
              <li key={pageIdx}>
                <button
                  className={` ${
                    pageIdx === pageIndex
                      ? "bg-slate-900 dark:bg-slate-600 dark:text-slate-200 text-white"
                      : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900"
                  } px-2 py-1 rounded-md`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {pageIdx + 1}
                </button>
              </li>
            ))}
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${
                  !canNextPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <Icon icon="heroicons-outline:chevron-right" />
              </button>
            </li>
          </ul>
        </div>
      </Card>

      <Modal
        activeModal={handleDeleteConfirms}
        onClose={() => sethandleDeleteConfirms(false)}
        title="Delete User"
        themeClass="bg-blue-500"
      >
        <div className="p-4 text-left">
          <div className="bg-gray-200 p-4 rounded-md">
            <h6 className="text-xl font-semibold text-gray-700 mb-3 text-center">
              Are you sure to Delete this User
            </h6>
            <div className="flex gap-4 justify-center mt-2">
              <button
                className=" bg-blue-400 text-white py-2 px-3 rounded-md"
                onClick={() => sethandleDeleteConfirms(false)}
              >
                Back
              </button>

              <button
                className=" bg-red-400 text-white py-2 px-3 rounded-md"
                onClick={() => sethandleDeleteConfirms(false)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        activeModal={update}
        onClose={() => setUpdate(false)}
        title="Edit User Details"
        themeClass="bg-blue-500"
      >
        <div className="p- text-left">
          <h5>Edit User Details :</h5>
          <div className="bg-gray-200 p-4 rounded-md">
            <Textinput
              label="Username"
              id="pn"
              type="text"
              placeholder=" Username"
            />
            <Textinput
              label="Email Address / Whatsapp"
              id="pn"
              type="text"
              placeholder=" Email Address / Whatsapp"
            />
            <Textinput
              label="Password"
              id="pn"
              type="text"
              placeholder="Password"
            />
            <Textinput
              label="Confirm Passwrod"
              id="pn"
              type="text"
              placeholder="Confirm Passwrod "
            />
            <div className=" flex justify-end">
              <button
                className=" bg-blue-400 text-white py-2 px-3 mt-4 rounded-md"
                onClick={() => setUpdate(false)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Admin01;
