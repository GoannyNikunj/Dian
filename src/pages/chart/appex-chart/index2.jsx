import React from "react";
import Card from "@/components/ui/Card";
import BasicArea from "./BasicArea";

const AppexChartPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Area Chart">
        <BasicArea />
      </Card>
    </div>
  );
};

export default AppexChartPage;
