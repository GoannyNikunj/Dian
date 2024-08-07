import React from "react";
import Chart from "react-apexcharts";

const shapeLine1 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00EBFF"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine2 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FB8F65"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine3 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#5743BE"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

const statistics2 = [
  {
    name: shapeLine1,
    title: "Popular Location",
    count: "VimanNagar",
    count2: "21%",
    bg: "bg-[#FFEDE5] dark:bg-slate-900	",
  },
  {
    name: shapeLine2,
    title: "Popular Day and Time",
    count: "Tuesday 03PM-05AM",
    count2: "21%",
    bg: "bg-[#FFEDE5] dark:bg-slate-900	",
  },
  {
    name: shapeLine3,
    title: "Popular Age Group",
    count: "25-30",
    count2: "21%",
    bg: "bg-[#FFEDE5] dark:bg-slate-900	",
  },
  {
    name: shapeLine1,
    title: "Popular Profession",
    count: "Business",
    count2: "21%",
    bg: "bg-[#FFEDE5] dark:bg-slate-900	",
  }
];

const GroupChart3 = () => {
  return (
    <>
    
      {statistics2.map((item, i) => (
        <div className={`py-[18px] px-4 rounded-[6px] ${item.bg} border border-black-500`} key={i}>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex-1">
              <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium" style={{fontSize:"16px"}}>
                {item.title}
              </div>
              <div className="text-slate-900 dark:text-white text-lg font-medium">
                <div>
                  <div style={{ display:"inline-block",fontSize:"26px",fontWeight:"400",lineHeight:"43.2px" }}>
                  {item.count}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none">
              <Chart
                options={item.name.options}
                series={item.name.series}
                type="area"
                height={48}
                width={48}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GroupChart3;

