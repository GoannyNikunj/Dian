import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";

const BasicArea1 = ({ height = 320 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      data: [20,40,90, 60, 40, 90, 80],
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
      categories: [
        "",
        "Jan01",
        "Jan02",
        "Jan03",
        "Jan04",
        "Jan05",
        "Jan06",
        "Jan07",
      ],
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
    // markers: {
    //   size: 5, // Adjust the size of the data points
    //   colors: "#f4036c", // Set the color of the data points
    //   strokeWidth: 0, // Set the border width of the data points
    //   hover: {
    //     sizeOffset: 2 // Set the size offset of the data points on hover
    //   }
    // },
  };
  return (
    <div>
      <Chart options={options} series={series} type="area" height={height} />
    </div>
  );
};

export default BasicArea1;
