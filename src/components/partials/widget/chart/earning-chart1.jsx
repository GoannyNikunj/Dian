import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import useDarkMode from "@/hooks/useDarkMode";
import Speedometer3 from "../../../Speedometer3.jsx";
import { REACT_APP_BASE_URL } from "../../../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const EarningChart1 = ({ props, props2 }) => {

  const [isDark] = useDarkMode();

  const [selectedView, setSelectedView] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");

  const series = [20, 80];

  const fontsize = [];
  const width = [];
  const height = [];

  if (props.Age) {
    fontsize.push("0px");
    width.push(0);
    height.push(0);
  } else {
    fontsize.push("14px");
    width.push(8);
    height.push(8);
  }

  const expense=`Expense `+props.expense; 
  const profit=`Profit `+props.profit; 
  const options = {
    labels: [expense, profit],
    dataLabels: {
      enabled: true,
    },
    colors: ["#0CE7FA", "#FA916B"],
    legend: {
      position: "bottom",
      fontSize: fontsize[0],
      fontFamily: "Inter",
      fontWeight: 400,
      markers: {
        width: width[0],
        height: height[0],
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

  useEffect(() => {

    const requestData = {
      period: "today",
    };

    fetch(`${REACT_APP_BASE_URL}/api/restaurants/userInsight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.code == 200) {

          // setSelectedView(responseData.data.customerDetails.Age);

        } else {
          console.log("API call error:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("API call error:", error);
      });

  }, []);

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);

    if (e.target.value == "Age") {
      setSelectedView(props.Age);
    } else if (e.target.value == "Gender") {
      setSelectedView(props.Gender);
    } else if (e.target.value == "Profession") {
      setSelectedView(props.Profession);
    } else if (e.target.value == "MaritalStatus") {
      console.log("MaritalStatus Click");
    } else if (e.target.value == "Channel") {
      console.log("Channel Click");
    } else {
      console.log("Type Click");
    }
  };

  return (
    <div className=" dark:bg-slate-900 rounded py-3 px-4 md:col-span-2 mt-3">
      <div className="flex items-center">

        {(() => {
          if (props.Age) {
            return <div className="flex-none mr-8">
              <div className="flex flex-col justify-center items-center text-xs">
                <p className="font-bold p-2">View By:</p>
                <ul className="mt-2">
                  {/* <li class="flex items-center"> */}
                  {/* <input type="radio" class="mr-2" value="Channel" onChange={handleRadioChange} checked={selectedRadio === "Channel"} /> */}
                  {/* <label for="channel" class="cursor-pointer"> */}
                  {/* Channel */}
                  {/* </label> */}
                  {/* </li> */}
                  {/* <li class="flex items-center"> */}
                  {/* <input type="radio" class="mr-2" value="Type" onChange={handleRadioChange} checked={selectedRadio === "Type"} /> */}
                  {/* <label for="type" class="cursor-pointer"> */}
                  {/* Type */}
                  {/* </label> */}
                  {/* </li> */}
                  <li class="flex items-center">
                    <input
                      type="radio"
                      class="mr-2"
                      value="Age"
                      onChange={handleRadioChange}
                      checked={selectedRadio === "Age"}
                    />
                    <label for="age" class="cursor-pointer">
                      Age
                    </label>
                  </li>
                  <li class="flex items-center">
                    <input
                      type="radio"
                      class="mr-2"
                      value="Gender"
                      onChange={handleRadioChange}
                      checked={selectedRadio === "Gender"}
                    />
                    <label for="gender" class="cursor-pointer">
                      Gender
                    </label>
                  </li>
                  {/* <li class="flex items-center"> */}
                  {/* <input type="radio" class="mr-2" value="MaritalStatus" onChange={handleRadioChange} checked={selectedRadio === "MaritalStatus"} /> */}
                  {/* <label for="maritalStatus" class="cursor-pointer"> */}
                  {/* Marital Status */}
                  {/* </label> */}
                  {/* </li> */}
                  <li class="flex items-center">
                    <input
                      type="radio"
                      class="mr-2"
                      value="Profession"
                      onChange={handleRadioChange}
                      checked={selectedRadio === "Profession"}
                    />
                    <label for="profession" class="cursor-pointer">
                      Profession
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          }
        })()}


        <div className="flex-1">
          <div className="flex justify-center">
            <div className="legend-ring2">
              {/* <Chart type="donut" height="200" options={options} series={series}/> */}
              <Speedometer3 props={props}/>
            </div>
          </div>
        </div>
        <div className="flex-none ml-9">
          <ul className="flex flex-col justify-center items-center list-none">
            {selectedView.map((item, i) => (
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>
                  {item.key} {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EarningChart1;
