import React from "react";
import Chart from "react-apexcharts";
import v1 from "../../../../assets/images/icon/v1.png";
import v2 from "../../../../assets/images/icon/v2.png";
import v3 from "../../../../assets/images/icon/v3.png";
import Card from "../../../ui/Card";
import Bubble from "../../../../pages/chart/appex-chart/Bubble";


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

// const statistics2 = [
//     {
//         name: shapeLine1,
//         title: "Revenue Generated",
//         count: "₹5000",
//         count2: "21%",
//         bg: "bg-white dark:bg-slate-900	",
//         iimag: v1
//     },
//     {
//         name: shapeLine2,
//         title: "Money From 3rd Party",
//         count: "₹5000",
//         count2: "21%",
//         bg: "bg-white dark:bg-slate-900	",
//         iimag: vector1
//     },
//     {
//         name: shapeLine3,
//         title: "Customer Database",
//         count: "₹5000",
//         count2: "21%",
//         bg: "bg-white dark:bg-slate-900	",
//         iimag: v2
//     },
//     {
//         name: shapeLine1,
//         title: "Total Orders",
//         count: "₹5000",
//         count2: "21%",
//         bg: "bg-white dark:bg-slate-900	",
//         iimag: v3
//     }
// ];

const GroupChart51 = (props) => {

    const statistics2 = [
        {
            name: shapeLine1,
            title: "Average Rating",
            count: "50%",
            count2: "21",
            bg: "bg-white dark:bg-slate-900",
            iimag: v1,
        },
        {
            name: shapeLine2,
            title: "Total Reviews",
            count: "5000",
            count2: "21",
            bg: "bg-white dark:bg-slate-900",
            iimag: v2,
        },
        {
            name: shapeLine3,
            title: "Response Rate",
            count: "50%",
            count2: "21",
            bg: "bg-white dark:bg-slate-900",
            iimag: v3,
        },

    ];

    return (
        <>

            {props.dataKey.map((item, i) => (
                <div className={`py-[18px] px-4 rounded-[8px] shadow-md border border-gray-300 ${item.bg}`} key={i}>
                    <div className="flex items-center justify-between space-x-8 rtl:space-x-reverse">
                        <div className="flex-1">
                            <div className="text-slate-900 dark:text-white text-lg font-medium">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div className="text-2xl" style={{ fontWeight: "400", lineHeight: "1.2" }}>
                                        {item.count}
                                    </div>
                                    &nbsp;
                                    <div className="text-md" style={{ display: "inline", marginLeft: "3px", marginTop: "5px", color: "green", fontWeight: "600", lineHeight: "1.2" }}>
                                        {item.count2}%
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 -2 20 20"
                                            style={{ display: "inline", marginLeft: "5px" }} // Ensure SVG is inline with text
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

                            <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium" style={{ whiteSpace: "nowrap" }}>
                                {item.title}
                            </div>
                        </div>
                        <div style={{ marginTop: "1px" }}>
                            <img src={item.iimag} alt="" style={{ height: "6vw", width: "6vw", maxWidth: "40px", maxHeight: "40px" }} />
                        </div>
                    </div>
                </div>


            ))}
        </>
    );
};

export default GroupChart51;
