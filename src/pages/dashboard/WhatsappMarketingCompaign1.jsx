import React, { useState } from "react";
import GroupChart2 from "@/components/partials/widget/chart/group-chart-6";
import HomeBredCurbs from "./HomeBredCurbs";

const Ecommerce = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
          <div>
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6" style={{fontSize:"24px",fontWeight:"700"}}>
      Whatsapp Marketing
      </h4><br/>
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6" style={{fontSize:"18px",fontWeight:"400"}}>
      Lorem ipsum dolor sit amet consectetur.
      </h4>
    </div>
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <GroupChart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;


