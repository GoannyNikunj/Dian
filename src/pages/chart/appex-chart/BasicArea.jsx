import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";

const BasicArea = (props) => {

  const xdata = [];
  const ydata = [];

  for (var i = 0; i < props.secondDataKey.length; i++) {

    if (props.secondDataKey[i].hasOwnProperty('totalRevenue')) {
      xdata.push(props.secondDataKey[i].totalRevenue);
      ydata.push(props.secondDataKey[i].totalOrders);
    } else if(props.secondDataKey[i].hasOwnProperty('key')){
      xdata.push(props.secondDataKey[i].key);
      ydata.push(props.secondDataKey[i].value);
    }
    else{
      xdata.push(props.secondDataKey[i].averageRating);
      ydata.push(props.secondDataKey[i].responseRate);
    }

  }

  var height = 180;

  const [isDark] = useDarkMode();

  const series = [
    {
      // data: [0.5,0.9,0.6,1.5,2.6,0.1,0.8,11.0],
      data: ydata
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#f4036c"],
    tooltip: {
      theme: "dark",
    },
    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },
    fill: {
      type: "gradient",
      colors: "#f4036c",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [50, 100, 0],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    xaxis: {
      // categories: [
      //   "Jan01",
      //   "Jan02",
      //   "Jan03",
      //   "Jan04",
      //   "Jan05",
      //   "Jan06",
      //   "Jan07",
      //   "Jan08",
      // ],
      categories: xdata,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    markers: {
      size: 5, // Adjust the size of the data points
      colors: "#f4036c", // Set the color of the data points
      strokeWidth: 0, // Set the border width of the data points
      hover: {
        sizeOffset: 2 // Set the size offset of the data points on hover
      }
    },
  };
  return (
    <div>

      {/* <div> */}
      {/* <div style="display: inline-block; width: 30%; background-color: red; height: 100px;"></div> */}
      {/* <div style="display: inline-block; width: 30%; background-color: green; height: 100px;"></div> */}
      {/* <div style="display: inline-block; width: 30%; background-color: blue; height: 100px;"></div> */}
      {/* </div> */}

      <Chart options={options} series={series} type="area" height={height} />
    </div>
  );
};

export default BasicArea;
