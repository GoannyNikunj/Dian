import React from "react";
import Chart from "react-apexcharts";
import img1 from "../../../../assets/images/icon/h1.png";
import img2 from "../../../../assets/images/icon/h2.png";
import img3 from "../../../../assets/images/icon/h3.png";
import img4 from "../../../../assets/images/icon/h4.png";

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
    title: "New Customers",
    count: "₹5000",
    count2: "21%",
    bg: "bg-[#E5F9FF] dark:bg-slate-900",
    imag: img1,
  },
  {
    name: shapeLine2,
    title: "Repeat Customers",
    count: "₹5000",
    count2: "21%",
    bg: "bg-[#FFEDE5] dark:bg-slate-900",
    imag: img2,
  },
  {
    name: shapeLine3,
    title: "Birthdays",
    count: "₹5000",
    count2: "21%",
    bg: "bg-[#EAE5FF] dark:bg-slate-900",
    imag: img3,
  },
  {
    name: shapeLine1,
    title: "Anniversaries",
    count: "₹5000",
    count2: "21%",
    bg: "bg-[#E5F9FF] dark:bg-slate-900",
    imag: img4,
  },
];

const GroupChart6 = (props) => {
  return (
    <>
      {statistics2.map((item, i) => (
        <div className={`py-[18px] px-4 rounded-[6px] ${item.bg}`} key={i}>
          <div className="flex justify-between items-center space-x-6 rtl:space-x-reverse">
            <div className="flex-1">
              <div className="text-slate-900 dark:text-white text-lg font-medium">
                <div>
                  {i === 0 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "43.2px",
                      }}
                    >
                      {props.FirstDataKey.totalCustomers}
                    </div>
                  ) : i === 1 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "43.2px",
                      }}
                    >
                      {props.FirstDataKey.totalRepeatCustomers}
                    </div>
                  ) : i === 2 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "43.2px",
                      }}
                    >
                      {props.FirstDataKey.totalBirthdays}
                    </div>
                  ) : i === 3 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "43.2px",
                      }}
                    >
                      {props.FirstDataKey.totalAnniversaries}
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "43.2px",
                      }}
                    >
                      {props.FirstDataKey.totalAnniversaries}
                    </div>
                  )}
                  {i === 0 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "20px",
                        marginLeft: "1px",
                        color: "green",
                        fontWeight: "600",
                        lineHeight: "19.2px",
                      }}
                    >
                      {props.FirstDataKey.totalCustomersChange}
                    </div>
                  ) : i === 1 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "20px",
                        marginLeft: "1px",
                        color: "green",
                        fontWeight: "600",
                        lineHeight: "19.2px",
                      }}
                    >
                      {props.FirstDataKey.totalRepeatCustomersChange}
                    </div>
                  ) : i === 2 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "20px",
                        marginLeft: "1px",
                        color: "green",
                        fontWeight: "600",
                        lineHeight: "19.2px",
                      }}
                    >
                      {props.FirstDataKey.totalBirthdaysChange}
                    </div>
                  ) : i === 3 ? (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "20px",
                        marginLeft: "1px",
                        color: "green",
                        fontWeight: "600",
                        lineHeight: "19.2px",
                      }}
                    >
                      {props.FirstDataKey.totalAnniversariesChange}
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "20px",
                        marginLeft: "1px",
                        color: "green",
                        fontWeight: "600",
                        lineHeight: "19.2px",
                      }}
                    >
                      {props.FirstDataKey.totalAnniversariesChange}
                    </div>
                  )}
                  <div
                    style={{
                      display: "inline-block",
                      color: "green",
                      fontWeight: "600",
                      lineHeight: "19.2px",
                      marginTop: "1px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 -2 20 20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
                {item.title}
              </div>
            </div>
            <div className="flex-none">
              <img
                src={item.imag}
                alt=""
                className="h-[7vw] w-[7vw] max-w-[40px] max-h-[40px]"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GroupChart6;
