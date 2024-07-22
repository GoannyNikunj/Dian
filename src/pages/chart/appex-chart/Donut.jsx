import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";

const Donut = () => {
  const [isDark] = useDarkMode();
  const series = [44, 55, 41];

  const options = {
    labels: ["Success", "Return", "Cancel"],
    dataLabels: {
      enabled: true,
    },
    colors: ["#50C793", "#F1595C", "#FBBF24"],
    legend: {
      show:false,
      position: "bottom",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569", 
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
          labels: {
            show: false,
            name: {
              show: false,
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Inter",
              color: isDark ? "#CBD5E1" : "#475569",
            },
            value: {
              show: false,
              fontFamily: "Inter",
              color: isDark ? "#CBD5E1" : "#475569",
              // formatter(val) {
              //   // eslint-disable-next-line radix
              //   return `${parseInt(val)}%`;
              // },
            },
            // total: {
            //   show: true,
            //   fontSize: "1.5rem",
            //   color: isDark ? "#CBD5E1" : "#475569",
            //   label: "Total",
            //   formatter() {
            //     return "20%";
            //   },
            // },
          },
        },
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "",
          },
        },
      },
    ],
  };

  return (
    <div>
      <Chart options={options} series={series} type="donut" height="150" />
    </div>
  );
};

export default Donut;
