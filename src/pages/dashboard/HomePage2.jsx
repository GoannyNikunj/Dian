import React, { useEffect, useState } from "react";
import GroupChart2 from "@/components/partials/widget/chart/group-chart-5";
import GroupChart3 from "@/components/partials/widget/chart/group-chart-7";
import GroupChart8 from "@/components/partials/widget/chart/group-chart-8";
import HomeBredCurbs from "./HomeBredCurbs";

import Card from "@/components/ui/Card";
import BasicArea from "../chart/appex-chart/BasicArea";

import Card2 from "@/components/ui/Card";
import EarningChart1 from "../../../src/components/partials/widget/chart/earning-chart1";
import SelectMonth from "@/components/partials/SelectMonth";
import HomeBredCurbs2 from "../dashboard/HomeBredCurbs";

import Card3 from "@/components/ui/Card";
import BasicMap from "../../pages/map/basic-map";

import TotalTable from "../../pages/utility/TotalTable4";
import { REACT_APP_BASE_URL } from "../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const Ecommerce = () => {
  const [filterMap, setFilterMap] = useState("usa");

  const [data, setData] = useState([]);

  const [FirstDataValue, setFirstDataValue] = useState({});
  const [SecondDataValue, setSecondDataValue] = useState({});
  const [FourthDataValue, setFourthDataValue] = useState({});
  const [TableDataValue, setTableDataValue] = useState([]);
  const [CustDataValue, setCustDataValue] = useState({});
  const [CustDataValue2, setCustDataValue2] = useState([]);
  const [BirthdayValue, setBirthdayValue] = useState({});
  const [AnniversaryValue, setAnniversaryValue] = useState({});
  const [MapValue, setMapValue] = useState([]);

  const handleButtonClick = async (occasion) => {

    if (occasion == "Birthdays") {

      const convertedArray = BirthdayValue.map((obj) => {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        return { month: key, number: value };
      })

      setData(convertedArray);

    } else {
      
      const convertedArray = AnniversaryValue.map((obj) => {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        return { month: key, number: value };
      })

      setData(convertedArray);

    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  const requestData = {
    period: "today",
  };

  const fetchData = () => {
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
          setFirstDataValue(responseData.data.topStats);
          setSecondDataValue(responseData.data.customerDetails.Age);
          setFourthDataValue(responseData.data.customerTrafficAnalysis);
          setCustDataValue(responseData.data.customerDetails);
          setCustDataValue2(responseData.data.customerDetails.Age);
          setBirthdayValue(responseData.data.occasions.birthdays);
          setAnniversaryValue(responseData.data.occasions.anniversaries);

          const convertedArray = responseData.data.occasions.birthdays.map((obj) => {
            const key = Object.keys(obj)[0];
            const value = obj[key];
            return { month: key, number: value };
          })
    
          setData(convertedArray);
          
          var a = [
            {
              item: "Baner",
              qty: "5000",
              price: "255",
            },
            {
              item: "Nigdi",
              qty: "3000",
              price: "773",
            },
            {
              item: "Hinjewadi",
              qty: "4000",
              price: "344",
            },
            {
              item: "Wagholi",
              qty: "5500",
              price: "522",
            },
          ];
          if (typeof responseData.data.tableDataKey === "undefined") {
            setTableDataValue(a);
          } else {
            setTableDataValue(responseData.data.customerTrafficAnalysis);
          }

          var b = [
            {
              x: 18.5640,
              y: 73.7798,
              circleRadius: 255,
              popup:"Baner",
            },
            {
              x: 18.5446,
              y: 73.9391,
              circleRadius: 773,
              popup:"Kharadi",
            }
          ];
          if (typeof responseData.data.mapDataKey === "undefined") {
            setMapValue(b);
          } else {
            setMapValue(responseData.data.customerTrafficAnalysis);
          }
        } else {
          console.log("API call error:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };

  const handleClick = (ParentComponentFunctionparameter) => {
    const requestData = {
      period: ParentComponentFunctionparameter,
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
          setFirstDataValue(responseData.data.topStats);
          setSecondDataValue(responseData.data.customerDetails.Age);
          setCustDataValue(responseData.data.customerDetails);
          setCustDataValue2(responseData.data.customerDetails.Age);
          setBirthdayValue(responseData.data.occasions.birthdays);
          setAnniversaryValue(responseData.data.occasions.anniversaries);

          var a = [
            {
              item: "Baner",
              qty: "5000",
              price: "255",
            },
            {
              item: "Nigdi",
              qty: "3000",
              price: "773",
            },
            {
              item: "Hinjewadi",
              qty: "4000",
              price: "344",
            },
            {
              item: "Wagholi",
              qty: "5500",
              price: "522",
            },
          ];
          if (typeof responseData.data.tableDataKey === "undefined") {
            setTableDataValue(a);
          } else {
            setTableDataValue(responseData.data.customerTrafficAnalysis);
          }

          var b = [
            {
              x: 18.5640,
              y: 73.7798,
              circleRadius: 255,
            },
            {
              x: 18.5446,
              y: 73.9391,
              circleRadius: 773,
            }
          ];
          if (typeof responseData.data.mapDataKey === "undefined") {
            setMapValue(b);
          } else {
            setMapValue(responseData.data.customerTrafficAnalysis);
          }
        } else {
          console.log("API call error:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };

  return (
    <>
      <div>
        <HomeBredCurbs title="Ecommerce" handleClick={handleClick} />
        <div className="grid grid-cols-12 gap-5 mb-5 mt-5">
          <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
              <GroupChart8 FirstDataKey={FirstDataValue} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <HomeBredCurbs2 title="Ecommerce" /> */}
        <div class="bg-white shadow-md rounded-lg p-6 w-full mt-6">
          <div class="flex flex-col md:flex-row items-center md:justify-between">
            <div class="md:w-1/2 md:pr-4">
              <h6 class="font-bold text-sm md:text-lg">Popular Hotspots</h6>
              <p class="text-xs md:text-xs mt-0">
                Overview of where your customers are coming from
              </p>
            </div>
            <svg
              class="w-6 h-6 md:w-8 md:h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3891 10.3891L7.5 14.2782L3.61091 10.3891C1.46303 8.2412 1.46303 4.7588 3.61091 2.61091C5.7588 0.46303 9.2412 0.46303 11.3891 2.61091C13.537 4.7588 13.537 8.2412 11.3891 10.3891ZM7.5 8.5C8.60457 8.5 9.5 7.60457 9.5 6.5C9.5 5.39543 8.60457 4.5 7.5 4.5C6.39543 4.5 5.5 5.39543 5.5 6.5C5.5 7.60457 6.39543 8.5 7.5 8.5ZM20.3891 19.3891L16.5 23.2782L12.6109 19.3891C10.463 17.2412 10.463 13.7588 12.6109 11.6109C14.7588 9.46303 18.2412 9.46303 20.3891 11.6109C22.537 13.7588 22.537 17.2412 20.3891 19.3891ZM16.5 17.5C17.6046 17.5 18.5 16.6046 18.5 15.5C18.5 14.3954 17.6046 13.5 16.5 13.5C15.3954 13.5 14.5 14.3954 14.5 15.5C14.5 16.6046 15.3954 17.5 16.5 17.5Z"
                fill="#4880FF"
              />
            </svg>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            <div class="lg:col-span-2">
              <div class="space-y-5 p-0 m-0">
                {/* <Card3> */}
                  <BasicMap props={MapValue} />
                {/* </Card3> */}
              </div>
            </div>
            <div class="lg:col-span-1">
              <div class="space-y-5">
                <Card3>
                  <h6 class="text-base font-bold whitespace-normal">
                    Distribution of your customers throughout the city
                  </h6>
                  <TotalTable tableKey={TableDataValue} />
                </Card3>
              </div>
            </div>
          </div>
          <div>
            {/* <HomeBredCurbs2 title="Ecommerce" /> */}
            <div className="grid grid-cols-12 gap-5 mt-5">
              <div className="2xl:col-span-6 lg:col-span-6 col-span-12">
                <Card2>
                  <div class="flex flex-col md:flex-row items-center md:justify-between">
                    <div class="md:w-1/2 md:pr-4">
                      <h6 class="font-bold text-sm">Occasions</h6>
                      <p class="text-xs mt-1">Overview of occasions yearly</p>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.002 2.00024H19.002C19.5543 2.00024 20.002 2.44796 20.002 3.00024V19.0002C20.002 19.5525 19.5543 20.0002 19.002 20.0002H1.00195C0.449673 20.0002 0.00195312 19.5525 0.00195312 19.0002V3.00024C0.00195312 2.44796 0.449673 2.00024 1.00195 2.00024H5.00195V0.000244141H7.00195V2.00024H13.002V0.000244141H15.002V2.00024ZM2.00195 8.00024V18.0002H18.002V8.00024H2.00195ZM4.00195 10.0002H6.00195V12.0002H4.00195V10.0002ZM9.00195 10.0002H11.002V12.0002H9.00195V10.0002ZM14.002 10.0002H16.002V12.0002H14.002V10.0002Z"
                        fill="#4880FF"
                      />
                    </svg>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
                    <div className="md:col-span-2">
                      <div class="flex items-center mt-5">
                        <button
                          type="button"
                          class="flex-grow flex-shrink-0 min-w-0 text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs sm:text-sm md:text-base lg:text-md xl:text-md px-3 py-1.5 text-left inline-flex items-center border border-blue-700 mr-4"
                          onClick={() => handleButtonClick("Birthdays")}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.66504 5.00016V8.33266H8.16504V5.00016H9.8317V8.33266H12.3317V5.00016H13.9984V8.33266L14.8317 8.3335C16.1631 8.3335 17.2515 9.37425 17.3275 10.6866L17.3317 10.8335V11.6668C17.3317 12.5117 17.0173 13.2832 16.4992 13.8707L16.4984 17.5002C16.4984 17.9604 16.1253 18.3335 15.665 18.3335H2.33171C1.87147 18.3335 1.49837 17.9604 1.49837 17.5002L1.49768 13.8669C1.06347 13.3722 0.771664 12.7454 0.688314 12.0488L0.669631 11.8378L0.665039 11.6668V10.8335C0.665039 9.50208 1.70581 8.41375 3.01815 8.33775L3.16504 8.3335L3.99837 8.33266V5.00016H5.66504ZM14.8317 10.0002H3.16504C2.73767 10.0002 2.38545 10.3218 2.33731 10.7363L2.33171 10.8335L2.33136 11.6427L2.33456 11.7655C2.38541 12.6431 3.11449 13.3335 3.99837 13.3335C4.83806 13.3335 5.53805 12.7104 5.64865 11.9164L5.66114 11.7897L5.66539 11.6427C5.69545 10.6022 7.18765 10.5651 7.32215 11.5312L7.33136 11.6427L7.33454 11.7655C7.38537 12.6431 8.11445 13.3335 8.99837 13.3335C9.87704 13.3335 10.5969 12.6536 10.6605 11.7912L10.6709 11.5558C10.7742 10.5927 12.2225 10.5927 12.3259 11.5558L12.3363 11.7912C12.3999 12.6536 13.1197 13.3335 13.9984 13.3335C14.877 13.3335 15.5969 12.6536 15.6605 11.7912L15.665 11.6668V10.8335C15.665 10.4062 15.3434 10.0539 14.9289 10.0057L14.8317 10.0002ZM4.83171 0.833496C5.93127 1.55949 6.21779 2.57352 6.03911 3.24035C5.86044 3.90719 5.17501 4.30291 4.50818 4.12424C3.84135 3.94556 3.44562 3.26014 3.6243 2.5933C3.8723 1.66775 4.83171 2.0835 4.83171 0.833496ZM8.99837 0.833496C10.098 1.55949 10.3845 2.57352 10.2058 3.24035C10.0271 3.90719 9.3417 4.30291 8.67487 4.12424C8.00804 3.94556 7.61229 3.26014 7.79095 2.5933C8.03895 1.66775 8.99837 2.0835 8.99837 0.833496ZM13.165 0.833496C14.2646 1.55949 14.5511 2.57352 14.3725 3.24035C14.1938 3.90719 13.5084 4.30291 12.8415 4.12424C12.1747 3.94556 11.779 3.26014 11.9576 2.5933C12.2056 1.66775 13.165 2.0835 13.165 0.833496Z"
                              fill="#FDD66E"
                            />
                          </svg>
                          &nbsp;Birthdays
                        </button>

                        <button
                          type="button"
                          class="flex-grow flex-shrink-0 min-w-0 text-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs sm:text-sm md:text-base lg:text-md xl:text-md px-3 py-1.5 text-left inline-flex items-center border border-blue-700"
                          onClick={() => handleButtonClick("Anniversary")}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9709 7.20442C15.1408 6.04297 17.0376 6.04297 18.2075 7.20442C19.3775 8.36583 19.3775 10.2489 18.2075 11.4103L13.6683 15.9167L9.12905 11.4103C7.95913 10.2489 7.95913 8.36583 9.12905 7.20442C10.299 6.04297 12.1958 6.04297 13.3657 7.20442L13.668 7.50425L13.9709 7.20442ZM15.5371 1.96447C16.3209 2.74981 16.79 3.72877 16.9448 4.74571C15.8344 4.53957 14.6626 4.73786 13.6684 5.34C11.8759 4.2543 9.5063 4.48142 7.95488 6.02162C6.17907 7.7845 6.12975 10.6171 7.80686 12.4394L7.95488 12.5931L9.97246 14.5967L8.66821 15.9042L1.60278 8.8275C-0.150832 6.86417 -0.0852836 3.84918 1.79943 1.96447C3.68627 0.0776255 6.70595 0.014059 8.66913 1.77378C10.6266 0.0166673 13.6516 0.0750006 15.5371 1.96447Z"
                              fill="#949FAC"
                            />
                          </svg>
                          &nbsp;Anniversaries
                        </button>
                      </div>

                      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                        {data.map((item, index) => (
                          <div
                            key={index}
                            className="bg-blue-50 rounded-lg shadow-md p-2"
                          >
                            <h6 className="text-center text-sm font-bold text-blue-400">
                              {item.number}
                            </h6>
                            <p className="text-center text-xs text-gray-600">
                              {item.month}
                            </p>
                          </div>
                        ))}
                        {/* <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Jan</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Feb</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Mar</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Apr</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">May</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Jun</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Jul</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Aug</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Sep</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Oct</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Nov</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg shadow-md p-2">
                          <h6 class="text-center text-sm font-bold text-cyan-600">234</h6>
                          <p class="text-center text-xs text-gray-600">Dec</p>
                        </div> */}
                      </div>

                      {/* <EarningChart /> */}
                    </div>
                  </div>
                </Card2>
              </div>
              <div className="2xl:col-span-6 lg:col-span-6 col-span-12">
                <Card2>
                  <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 md:pr-4">
                      <div class="flex items-center">
                        <h6 class="font-bold text-sm md:text-md whitespace-nowrap">
                          Customer Detail
                        </h6>
                      </div>
                      <div class="flex items-center mt-1">
                        <p class="text-xs">Overview of</p>
                      </div>
                    </div>
                    <svg
                      class="w-5 h-5 ml-auto"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.9999 0.0493164L9 3.07082C5.6077 3.55606 3 6.47346 3 9.99994C3 13.8659 6.13401 16.9999 10 16.9999C11.5723 16.9999 13.0236 16.4815 14.1922 15.6063L16.3289 17.7427C14.605 19.1535 12.4014 19.9999 10 19.9999C4.47715 19.9999 0 15.5227 0 9.99994C0 4.81462 3.94662 0.551086 8.9999 0.0493164ZM19.9506 11C19.7509 13.011 18.9555 14.8467 17.7433 16.3282L15.6064 14.1921C16.2926 13.2758 16.7595 12.1858 16.9291 10.9999L19.9506 11ZM11.0011 0.0494163C15.725 0.518956 19.4815 4.27583 19.9506 8.99984L16.9291 8.99974C16.4905 5.93446 14.0661 3.50986 11.001 3.07097L11.0011 0.0494163Z"
                        fill="#4880FF"
                      />
                    </svg>
                  </div>

                  <div class="flex items-center mt-5">
                    <button
                      type="button"
                      class="flex-grow text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs sm:text-sm md:text-base lg:text-md xl:text-md text-left  px-3 py-1.5 inline-flex items-center border border-blue-700 mr-4"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="16"
                          height="16"
                          transform="translate(0 0.5)"
                          fill="#9D3AFF"
                        />
                        <path
                          d="M14 1.83325V15.1666H12.6667V9.83325H10.6667V5.16658C10.6667 3.32564 12.1591 1.83325 14 1.83325ZM6 9.76658V15.1666H4.66667V9.76658C3.14517 9.45772 2 8.11259 2 6.49992V2.49992H3.33333V7.16658H4.66667V2.49992H6V7.16658H7.33333V2.49992H8.66667V6.49992C8.6666 8.11259 7.52147 9.45772 6 9.76658Z"
                          fill="white"
                        />
                      </svg>
                      &nbsp;Dine-In
                    </button>

                    <button
                      type="button"
                      disabled
                      class="flex-grow flex-shrink-0 min-w-0 text-blue-400 cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs sm:text-sm md:text-base lg:text-md xl:text-md px-3 py-1.5 text-left inline-flex items-center border border-blue-700"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.166 13V14.6667L11.8327 15.5V16.3333H5.16602L5.16301 15.503L6.83268 14.6667V13H0.992516C0.536057 13 0.166016 12.6259 0.166016 12.1604V1.33957C0.166016 0.875892 0.545441 0.5 0.992516 0.5H16.0062C16.4627 0.5 16.8327 0.8741 16.8327 1.33957V12.1604C16.8327 12.6241 16.4533 13 16.0062 13H10.166ZM1.83268 9.66667V11.3333H15.166V9.66667H1.83268Z"
                          fill="#949FAC"
                        />
                      </svg>
                      &nbsp;Online
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="md:col-span-2">
                      <EarningChart1 props={CustDataValue} props2={CustDataValue2}/>
                    </div>
                  </div>
                </Card2>
              </div>
            </div>
          </div>
          <div className=" space-y-5 mt-4">
            <Card>
              <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-4">
                  <h6 class="font-bold text-md">Customer Traffic Analysis</h6>
                  <p class="text-xs mt-1">
                    Overview of Customer traffic as per day and time of the week
                  </p>
                </div>
                <svg
                  class="w-6 h-6 text-blue-500 dark:text-white ml-auto mt-4 md:mt-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"
                  />
                </svg>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div class="bg-blue-50 border p-2 flex flex-col justify-center items-center">
                  <h6 class="text-center text-base font-bold text-blue-500">
                    Tuesday
                  </h6>
                  <p class="text-center text-sm">Busiest day of the week</p>
                </div>
                <div class="bg-blue-50 border p-2 flex flex-col justify-center items-center">
                  <h6 class="text-center text-base font-bold text-blue-500">
                    400 customers
                  </h6>
                  <p class="text-center text-sm">Average traffic of the week</p>
                </div>
                <div class="bg-blue-50 border p-2 flex flex-col justify-center items-center">
                  <h6 class="text-center text-base font-bold text-blue-500">
                    02 PM-06 PM
                  </h6>
                  <p class="text-center text-sm">Busiest time of the week</p>
                </div>
              </div>

              <BasicArea secondDataKey={SecondDataValue} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
