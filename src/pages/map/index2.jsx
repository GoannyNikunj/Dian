import React from "react";
import Card3 from "@/components/ui/Card";
import BasicMap from "./basic-map";

const MapPage = () => {
  return (
    <div className=" space-y-5">
      <Card3 title="Basic Map">
        <BasicMap />
      </Card3>
    </div>
  );
};

export default MapPage;
