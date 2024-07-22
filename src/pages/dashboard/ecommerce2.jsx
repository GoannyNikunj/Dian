import React, { useState } from "react";
import Card from "@/components/ui/Card";
import EarningChart from "../../components/partials/widget/chart/earning-chart";
import SelectMonth from "@/components/partials/SelectMonth";
import HomeBredCurbs2 from "./HomeBredCurbs";

const Ecommerce = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs2 title="Ecommerce" />
      <div className="grid grid-cols-12 gap-5">
      <div className="2xl:col-span-6 lg:col-span-5 col-span-12">
          <Card2 title="Statistic" headerslot={<SelectMonth />}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="md:col-span-2">
                <EarningChart />
              </div>
            </div>
          </Card2>
        </div>
        <div className="2xl:col-span-6 lg:col-span-5 col-span-12">
          <Card2 title="Statistic" headerslot={<SelectMonth />}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="md:col-span-2">
                <EarningChart />
              </div>
            </div>
          </Card2>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
