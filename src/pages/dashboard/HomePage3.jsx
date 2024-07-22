import React, { useState } from "react";
import GroupChart2 from "@/components/partials/widget/chart/group-chart-5";
import GroupChart3 from "@/components/partials/widget/chart/group-chart-7";
import GroupChart8 from "@/components/partials/widget/chart/group-chart-8";
import GroupChart9 from "@/components/partials/widget/chart/group-chart-9";
import HomeBredCurbs from "./HomeBredCurbs";

import Card from "@/components/ui/Card";
import BasicArea from "../chart/appex-chart/BasicArea";

import Card2 from "@/components/ui/Card";
import EarningChart from "../../../src/components/partials/widget/chart/earning-chart";
import SelectMonth from "@/components/partials/SelectMonth";
import HomeBredCurbs2 from "../dashboard/HomeBredCurbs";

import Card3 from "@/components/ui/Card";
import BasicMap from "../../pages/map/basic-map";

import TotalTable from "../../pages/utility/TotalTable4";

const Ecommerce = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <>
        <div>
      <HomeBredCurbs title="Ecommerce" />
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            <GroupChart9 />
          </div>
        </div>
      </div>
    </div>
    <div className=" space-y-5">
      <Card title="Area Chart">
        <BasicArea />
      </Card>
    </div>
    <div>
      <HomeBredCurbs2 title="Ecommerce" />
      <div className="grid grid-cols-12 gap-5">
      <div className="2xl:col-span-8 lg:col-span-5 col-span-12">
      <div className="space-y-5">
      <Card3 title="Basic Map">
        <BasicMap />
      </Card3>
    </div>
        </div>
        <div className="2xl:col-span-4 lg:col-span-5 col-span-12">
        <div className="space-y-5">
      <Card3 title="Distribution of your customers throuhout the city">
      <TotalTable />
      </Card3>
    </div>
        </div>
      </div>
    </div>
    <div>
      <HomeBredCurbs2 title="Ecommerce" />
      <div className="grid grid-cols-12 gap-5">
      <div className="2xl:col-span-12 lg:col-span-5 col-span-12">
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
    </>
  );
};

export default Ecommerce;