import React from "react";
const rows = [
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: "₹500",
    Image: "src/assets/images/icon/Up.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: "₹500",
    Image: "src/assets/images/icon/Down.svg"
  }
];

const TotalTable = () => {
  return (
    <div>
      <table className="w-full border-collapse table-fixed dark:border-slate-700 dark:border">
        <tr>
          <th
            colSpan={1}
            className="bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left"
          >
            <span className="block px-6 py-5 font-semibold" style={{textAlign:"center"}}>Date & Time</span>
          </th>
          <th className="bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left">
            <span className="block px-6 py-5 font-semibold" style={{textAlign:"center"}}>Amount</span>
          </th>
        </tr>
        {rows.map((data, index) => (
          <tr
            key={index}
            className="border-b border-slate-100 dark:border-slate-700"
          >
            <td
              colSpan={1}
              className="text-slate-900 dark:text-slate-300 text-sm  font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4" style={{textAlign:"center"}}
            >
              {data.item1}<br/>{data.item2}
            </td>
            <td className="text-slate-900 dark:text-slate-300 text-sm  font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4" style={{textAlign:"center"}}>
              {/* {data.qty}                */}
              <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{height:"68px"}}
        >
                      <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block text-sm dark:text-slate-800">
                <img src={data.Image} alt="SVG Image" style={{height:"24px"}}/>
                </span>
              </h4>
            </div>
          <div className="flex-1" style={{marginLeft:"20px"}}>
            <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block dark:text-slate-800" style={{fontSize:"16px",fontWeight:"700"}}>{data.qty}</span>
              </h4>
            </div>
          </div>
        </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TotalTable;
