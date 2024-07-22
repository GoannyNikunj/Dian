import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";


import DonutChart2 from "@/components/partials/widget/chart/dount-chart5";

const EarningChart = (props) => {

  var SecondDataValue={"expense": 54, "profit": 50} ;
  
  var popularDayTimeobject = props.SecondDataKey;
  const popularDayTimeobjectkeys = [];
  for (let key in popularDayTimeobject) {
    popularDayTimeobjectkeys.push(key);
  }

  if(popularDayTimeobjectkeys.length==2){
    SecondDataValue.expense=props.SecondDataKey.expense;
    SecondDataValue.profit=props.SecondDataKey.profit;
  }
  

 const expense = SecondDataValue.expense;
  const profit = SecondDataValue.profit;
  const [isDark] = useDarkMode();
  const series = [expense, profit];
  const labels = [`Expense: ${expense}`, `Profit: ${profit}`]; // Create dynamic labels

  const options = {
    labels: labels,
    dataLabels: {
      enabled: true,
    },
    colors: ["#0CE7FA", "#FA916B"],
    legend: {
      position: "bottom",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 400,
      markers: {
        width: 8,
        height: 8,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var userName = "1000 ₹" ;
  var reviews= "Revenue Generated";

  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded py-3 px-4 md:col-span-2" >
      <div className="flex items-center">
        {/* <div className="flex-none">
          <div className="text-sm text-slate-600 dark:text-slate-300 mb-[6px]">
            Earnings
          </div>
          <div className="text-lg text-slate-900 dark:text-white font-medium mb-[6px]">
            ${profit.toFixed(2)} 
          </div>
          <div className="font-normal text-xs text-slate-600 dark:text-slate-300">
            <span className="text-primary-500">+08%</span> From last Week
          </div>
        </div> */}
        <div className="flex-1">
          <div className="legend-ring2">
          <DonutChart2
                rating={userName}
                reviews={reviews}
                backgroundColor="#19CC56" backgroundColor2="#F6F5F7" />
            {/* <Chart type="donut" height="200" options={options} series={series} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningChart;
