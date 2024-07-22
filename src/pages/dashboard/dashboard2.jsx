import React, { useState } from "react";
import Card from "@/components/ui/Card";
import RadialsChart from "@/components/partials/widget/chart/radials2";
import SelectMonth from "@/components/partials/SelectMonth";
import HomeBredCurbs from "./HomeBredCurbs";

const Dashboard = () => {
  const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Dashboard" />
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-6 col-span-12">
          <Card title="Overview" headerslot={<SelectMonth />}>
            <RadialsChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
