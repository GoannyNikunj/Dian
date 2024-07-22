import React from "react";
const rows = [
    {
      Description: "Marketing Fee for estimated results",
      Amount: "₹470"
    },
    { 
      Description: "GST 18%",
      Amount: "₹30"
    },
    {
      Description: "Total",
      Amount: "₹500"
    },
    {
      Description: "Wallet Balance",
      Amount: "₹2000"
    },
    {
      Description: "",
      Amount: "-₹1,500"
    }
  ];

const TotalTable = () => {
  return (
    <div style={{marginTop:"17px"}}>
    <table className="w-full border-collapse table-fixed dark:border-slate-700 dark:border">
      <tr>
        <th
          colSpan={1}  style={{textAlign:"center"}}
          className="bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left"
        >
          <span className="block px-6 py-5 font-semibold">Description</span>
        </th>
        <th colSpan={1} className="bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left" style={{textAlign:"center"}}>
          <span className="block px-6 py-5 font-semibold">Amount</span>
        </th>
      </tr>
      {rows.map((data, index) => (
        <tr
          key={index}
          className="border-b border-slate-100 dark:border-slate-700"  style={{textAlign:"center"}}
        >
          <td colSpan={1} className="text-slate-900 dark:text-slate-300 text-sm  font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4"  style={{textAlign:"center"}}>
            {data.Description}
          </td>
          <td colSpan={1} className="text-slate-900 dark:text-slate-300 text-sm  font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4"  style={{textAlign:"center"}}>
            {data.Amount}
          </td>
        </tr>
      ))}
    </table>
  </div>
  );
};

export default TotalTable;
