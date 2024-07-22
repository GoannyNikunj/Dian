import React from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import TotalTable from "./TotalTable3";
import TotalTable2 from "./TotalTable5";
import userDarkMode from "@/hooks/useDarkMode";

import FormWizard from "../forms/form-wizard/HorizentalWizard2";

const InvoicePreviewPage = () => {
  const printPage = () => {
    window.print();
  };
  const [isDark] = userDarkMode();

  return (
    <>
    
    <div>
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6" style={{fontSize:"24px",fontWeight:"700"}}>
      Wallet History
      </h4><br/>
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6" style={{fontSize:"18px",fontWeight:"400"}}>
      Overview of Lorem ipsum dolor sit amet consectetur.
      </h4>
    </div>
    <div
          className="bg-no-repeat bg-cover bg-center py-8 rounded-[6px] relative flex items-center"
          style={{height:"68px"}}
        >
                      <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block text-sm dark:text-slate-800" style={{fontSize:"24px",fontWeight:"600"}}>
                {/* <img src={data.Image} alt="SVG Image" style={{height:"24px"}}/> */}
                Total Balance:
                </span>
              </h4>
            </div>
          <div className="flex-1" style={{marginLeft:"20px"}}>
            <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block dark:text-slate-800" style={{fontSize:"40px",fontWeight:"700"}}>2300</span>
              </h4>
            </div>
          </div>
        </div>
    <div>
      <Card style={{padding:"20px 0px 0px 0px"}}>
      <div className="mx-auto shadow-base dark:shadow-none rounded-md overflow-x-auto" style={{marginLeft:"20px",marginTop:"2em",marginRight:"20px",marginBottom:"2em",boxShadow:"none"}}>
      <FormWizard />
        </div>
        <div className="mx-auto shadow-base dark:shadow-none rounded-md overflow-x-auto" style={{marginLeft:"20px",marginTop:"2em",marginRight:"20px",marginBottom:"2em"}}>
          <TotalTable />
        </div>
      </Card>
    </div>
    </>
  );
};

export default InvoicePreviewPage;
