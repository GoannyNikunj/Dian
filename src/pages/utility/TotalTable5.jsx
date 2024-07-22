import React from "react";
const rows = [
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 5,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image:"http://localhost:5173/src/assets/images/icon/5.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 4.5,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image:"http://localhost:5173/src/assets/images/icon/4.5.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 4,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image:"http://localhost:5173/src/assets/images/icon/4.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 3,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image:"http://localhost:5173/src/assets/images/icon/3.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 2,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image:"http://localhost:5173/src/assets/images/icon/2.svg"
  },
  {
    item1: "06 March 2023",
    item2: "15:00",
    qty: 1,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Image:"http://localhost:5173/src/assets/images/icon/1.svg"
  }
];

const TotalTable = () => {
  return (
    <div style={{marginTop:"17px"}}>
      <table className="w-full border-collapse table-fixed dark:border-slate-700 dark:border">
        <tr>
          <th
            colSpan={1}
            className="dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left"
          >
            {/* <span className="block px-6 py-5 font-semibold" style={{widows:"146px",height:"26px",fontWeight:"700",fontSize:"22px"}}>Rounak Verma</span> */}
            {/* {data.qty}                */}
            <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{height:"68px"}}
        >
                      <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block text-sm dark:text-slate-800">
                <img src="/src/assets/images/icon/ByerProfile.svg" alt="SVG Image" style={{height:"60.96px",}}/>
                </span>
              </h4>
            </div>
          <div className="flex-1" style={{marginLeft:"20px"}}>
            <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block dark:text-slate-800" style={{fontSize:"16px",fontWeight:"700"}}>Rounak Verma</span>
              </h4>
            </div>
          </div>
        </div>
          </th>
          <th colSpan={1} className="dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left">
            <span className="block px-6 py-5 font-semibold"></span>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default TotalTable;
