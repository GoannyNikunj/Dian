import React from "react";

const TotalTable = (props) => {
  return (
    <div>
      <div className="overflow-x-auto mt-2 rounded-lg">
      <table className="w-full border-collapse table-fixed dark:border-slate-700 dark:border">
    <thead className="rounded-t-lg">
      <tr>
        <th className="bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left">
          <span className="block px-6 py-5 font-semibold">Location</span>
        </th>
        <th className="bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left">
          <span className="block px-6 py-5 font-semibold">Total Customers</span>
        </th>
        <th className="bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left">
          <span className="block px-6 py-5 font-semibold">Total Orders</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {props.tableKey.map((data, index) => (
        <tr
          key={index}
          className={`border-b border-slate-100 dark:border-slate-700 ${
            index === props.tableKey.length - 1 ? "rounded-b-lg" : ""
          }`}
        >
          <td className="text-slate-900 dark:text-slate-300 text-xs font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4">
            {data.item}
          </td>
          <td className="text-slate-900 dark:text-slate-300 text-xs font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4">
            {data.qty}
          </td>
          <td className="text-slate-900 dark:text-slate-300 text-xs font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4">
            {data.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
      </div>

    </div>
  );
};

export default TotalTable;
