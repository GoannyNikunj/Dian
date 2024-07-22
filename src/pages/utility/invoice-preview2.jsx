import React from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import TotalTable from "./TotalTable2";
import TotalTable5 from "./TotalTable5";
import userDarkMode from "@/hooks/useDarkMode";

// import images
import MainLogo from "@/assets/images/logo/logo.svg";
import LogoWhite from "@/assets/images/logo/logo-white.svg";

const InvoicePreviewPage = () => {
  const printPage = () => {
    window.print();
  };
  const [isDark] = userDarkMode();

  return (
    <>
        <div>
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6">
      Review Analytics
      </h4>
    </div>
    <div>
      <Card bodyClass="p-0">
        <div className="max-w-[980px] mx-auto shadow-base dark:shadow-none my-8 rounded-md overflow-x-auto" style={{boxShadow:"none"}}>
          <TotalTable5 />
          <TotalTable />
        </div>
      </Card>
    </div>
    </>
  );
};

export default InvoicePreviewPage;
