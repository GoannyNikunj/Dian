import React, { useEffect, useState } from "react";
import HomeBredCurbs from "./HomeBredCurbs";
import GroupChart51 from "@/components/partials/widget/chart/group-chart51";
import BasicArea from "../chart/appex-chart/BasicArea";
import rounak from "../../assets/images/icon/rounak.png";
import { useNavigate } from "react-router-dom";
import { REACT_APP_BASE_URL } from "../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const Ecommerce = () => {
  const [filterMap, setFilterMap] = useState("usa");

  const data1 = [
    {
      title: "Average Rating",
      count: "10%",
      count2: "11",
      bg: "bg-white dark:bg-slate-900",
      iimag: "/src/assets/images/icon/v1.png",
    },
    {
      title: "Total Reviews",
      count: "20%",
      count2: "21",
      bg: "bg-white dark:bg-slate-900",
      iimag: "/src/assets/images/icon/v2.png",
    },
    {
      title: "Response Rate",
      count: "30%",
      count2: "31",
      bg: "bg-white dark:bg-slate-900",
      iimag: "/src/assets/images/icon/v3.png",
    },
  ];
  const navigate = useNavigate();
  const handleRowClick = (userId) => {
    navigate(`/api/restaurants/getEmployeesReviews/${userId}`);
  };
  const [CardDataValue, setCardDataValue] = useState({});
  const [EmpDataValue, setEmpDataValue] = useState([]);
  const [users, setUsers] = useState([]);
  const [recentReviewValue1, setRecentReviewValue1] = useState([]);
  const [recentReviewValue2, setRecentReviewValue2] = useState([]);
  const [recentReviewValue3, setRecentReviewValue3] = useState([]);
  const [ratingValue, setRatingValue] = useState([]);
  const [ratingValue1, setRatingValue1] = useState([]);

  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 3;

  const handleViewMore = () => {
    setShowMore(true);
  };

  const [visibleDiv, setVisibleDiv] = useState('div1');

  const handleClick1 = (divId) => {
    setVisibleDiv(visibleDiv === divId ? null : divId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const requestData = {
    period: "today",
  };

  const fetchData = () => {
    fetch(`${REACT_APP_BASE_URL}/api/restaurants/reviewInsight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        if (responseData.code == 200) {
          setRecentReviewValue1(responseData.data.reviews.recentReviews);
          setRecentReviewValue2(responseData.data.reviews.topPositiveReviews);
          setRecentReviewValue3(responseData.data.reviews.topNegativeReviews);

          setRatingValue(responseData.data.ratings);
          setRatingValue1(responseData.data.ratings.ratings);

          setUsers(responseData.data.employeeLast10Reviews);
          setCardDataValue(responseData.data.topStats);
          if (responseData.data.percentageData) {
            setEmpDataValue(responseData.data.employeeLast10Reviews);
          } else {
            setEmpDataValue(data1);
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
    fetch(`${REACT_APP_BASE_URL}/api/restaurants/reviewInsight`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        if (responseData.code == 200) {
          setRecentReviewValue1(responseData.data.reviews.recentReviews);
          setRecentReviewValue2(responseData.data.reviews.topPositiveReviews);
          setRecentReviewValue3(responseData.data.reviews.topNegativeReviews);

          setRatingValue(responseData.data.ratings);
          setRatingValue1(responseData.data.ratings.ratings);

          setUsers(responseData.data.employeeLast10Reviews);
          setCardDataValue(responseData.data.topStats);
          if (responseData.data.percentageData) {
            setEmpDataValue(responseData.data.employeeLast10Reviews);
          } else {
            setEmpDataValue(data1);
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
      {/* {recentReviewValue1.map(user => (
        <h1>helllo</h1>
      ))}
      {recentReviewValue2.map(user => (
        <h1>hiiii</h1>
      ))}
      {recentReviewValue3.map(user => (
        <h1>bye</h1>
      ))} */}
      <div>
        <HomeBredCurbs />
        <div class="bg-white shadow-md rounded-lg p-6 w-full mt-6">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-4">
              <h6 class="font-bold text-md">Customer Traffic Analysis</h6>
              <p class="text-xs mt-1">
                Overview of traffic as per date and time
              </p>
            </div>
            <svg
              class="w-6 h-6 text-blue-500 dark:text-white ml-auto"
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
          <div className="grid grid-cols-12 gap-5 mb-8 mt-8">
            <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <GroupChart51 dataKey={EmpDataValue} />
              </div>
            </div>
          </div>

          {/* View By */}
          <div class="flex flex-wrap justify-start items-center space-x-4 mb-3">
            <label class="flex items-center font-bold w-full sm:w-auto mb-2 sm:mb-0">
              View By
            </label>
            <label class="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
              <input type="radio" name="radio-group" class="mr-2" />
              Average Rating
            </label>
            <label class="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
              <input type="radio" name="radio-group" class="mr-2" />
              Food Quality
            </label>
            <label class="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
              <input type="radio" name="radio-group" class="mr-2" />
              Service
            </label>
            <label class="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
              <input type="radio" name="radio-group" class="mr-2" />
              Ambience
            </label>
            <label class="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
              <input type="radio" name="radio-group" class="mr-2" />
              Costing
            </label>
          </div>
          <BasicArea secondDataKey={[CardDataValue]} />
        </div>
      </div>
      {/* Recent Revies Section */}
      <div class=" w-full mt-6">
        <div class="flex flex-col md:flex-row">
          {/* Recent Reviews Section */}
          <div class="w-full md:w-2/3 md:mr-4 h-full">
            <div class="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 class="text-lg font-semibold mb-2">Recent Reviews</h2>

              <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mb-8 mt-2 items-center justify-center">
                  <button
                    onClick={() => handleClick1("div1")}
                    className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-lg focus:outline-none"
                  >
                    Recent Reviews
                  </button>
                  <button
                    onClick={() => handleClick1("div2")}
                    className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-lg focus:outline-none"
                  >
                    Top 5 Positive Reviews
                  </button>
                  <button
                    onClick={() => handleClick1("div3")}
                    className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-lg focus:outline-none"
                  >
                    Top 5 Negative Reviews
                  </button>
                </div>

                <div
                  id="div1"
                  className={`transition-opacity duration-300 ease-in-out bg-white rounded-lg ${visibleDiv === "div1" ? "opacity-100" : "opacity-0 hidden"
                    }`}
                >
                  {recentReviewValue1.slice(0, showMore ? recentReviewValue1.length : initialDisplayCount).map((user, index) => (
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 mb-0 sm:mb-0 sm:mr-4">
                          <img
                            src={rounak}
                            alt="Profile icon"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <h2 className="text-lg font-semibold sm:mb-0 sm:mr-4">
                            {user.name}
                          </h2>
                          <span className="text-gray-600 text-xs">
                            5 hours ago
                          </span>
                        </div>
                        <div className="ml-auto mt-4 sm:mt-0">
                          <div className="flex items-center space-x-1">
                            {(() => {
                              const userList = [];
                              for (let i = 0; i < 5; i++) {
                                {
                                  i >= user.rating
                                    ? userList.push(
                                      <svg
                                        key={i}
                                        className="w-4 h-4 text-gray-300 dark:text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    )
                                    : userList.push(
                                      <svg
                                        key={i}
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    );
                                }
                              }
                              return userList;
                            })()}
                          </div>
                        </div>
                      </div>
                      <div className="mt-0 ml-0 sm:ml-6">
                        <p className="text-gray-700 text-xs">{user.review}</p>
                      </div>

                    </div>
                  ))}
                  {!showMore && recentReviewValue1.length > initialDisplayCount && (
                    <button
                      onClick={handleViewMore}
                      className="text-blue-500 font-medium underline mt-1"
                    >
                      View all rating and review
                    </button>
                  )}
                </div>
                <div
                  id="div2"
                  className={`transition-opacity duration-300 ease-in-out bg-white rounded-lg ${visibleDiv === "div2" ? "opacity-100" : "opacity-0 hidden"
                    }`}
                >
                  {recentReviewValue2.slice(0, showMore ? recentReviewValue2.length : initialDisplayCount).map((user, index) => (
                   <div className="space-y-2 mb-3">
                   <div className="flex items-start flex-col sm:flex-row">
                     <div className="flex-shrink-0 mb-0 sm:mb-0 sm:mr-4">
                       <img
                         src={rounak}
                         alt="Profile icon"
                         className="w-8 h-8 rounded-full"
                       />
                     </div>
                     <div className="flex flex-col sm:flex-row sm:items-center">
                       <h2 className="text-lg font-semibold sm:mb-0 sm:mr-4">
                         {user.name}
                       </h2>
                       <span className="text-gray-600 text-xs">
                         5 hours ago
                       </span>
                     </div>
                     <div className="ml-auto mt-4 sm:mt-0">
                       <div className="flex items-center space-x-1">
                         {(() => {
                           const userList = [];
                           for (let i = 0; i < 5; i++) {
                             {
                               i >= user.rating
                                 ? userList.push(
                                   <svg
                                     key={i}
                                     className="w-4 h-4 text-gray-300 dark:text-gray-500"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor"
                                     viewBox="0 0 22 20"
                                   >
                                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                   </svg>
                                 )
                                 : userList.push(
                                   <svg
                                     key={i}
                                     className="w-4 h-4 text-yellow-300"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor"
                                     viewBox="0 0 22 20"
                                   >
                                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                   </svg>
                                 );
                             }
                           }
                           return userList;
                         })()}
                       </div>
                     </div>
                   </div>
                   <div className="mt-0 ml-0 sm:ml-6">
                     <p className="text-gray-700 text-xs">{user.review}</p>
                   </div>

                 </div>
                  ))}
                  {!showMore && recentReviewValue1.length > initialDisplayCount && (
                    <button
                      onClick={handleViewMore}
                      className="text-blue-500 font-medium underline mt-1"
                    >
                      View all rating and review
                    </button>
                  )}
                </div>
                <div
                  id="div3"
                  className={`transition-opacity duration-300 ease-in-out bg-white rounded-lg ${visibleDiv === "div3" ? "opacity-100" : "opacity-0 hidden"
                    }`}
                >
                  {recentReviewValue3.slice(0, showMore ? recentReviewValue3.length : initialDisplayCount).map((user, index) => (
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center flex-col sm:flex-row">
                        <div className="flex-shrink-0 mb-0 sm:mb-0 sm:mr-4">
                          <img
                            src={rounak}
                            alt="Profile icon"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <h2 className="text-lg font-semibold sm:mb-0 sm:mr-4">
                            {user.name}
                          </h2>
                          <span className="text-gray-600 text-xs">
                            5 hours ago
                          </span>
                        </div>
                        <div className="ml-auto mt-4 sm:mt-0">
                          <div className="flex items-center space-x-1">
                            {(() => {
                              const userList = [];
                              for (let i = 0; i < 5; i++) {
                                {
                                  i >= user.rating
                                    ? userList.push(
                                      <svg
                                        className="w-4 h-4 text-gray-300 dark:text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    )
                                    : userList.push(
                                      <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                      >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                    );
                                }
                              }
                              return userList;
                            })()}
                          </div>
                        </div>
                      </div>
                      <div className=" mt-0 ml-0 sm:ml-6">
                        <p className="text-gray-700 text-xs">{user.review}</p>
                      </div>
                    </div>
                  ))}
                  {!showMore && recentReviewValue1.length > initialDisplayCount && (
                    <button
                      onClick={handleViewMore}
                      className="text-blue-500 font-medium underline mt-1"
                    >
                      View all rating and review
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 h-full">
            <div class="bg-white rounded-lg shadow-md p-4">
              <h6 className=" text-lg font-bold">Rating Distribution</h6>
              <p className="" style={{ fontSize: 9 }}>
                Breakdown of rating and review source during the selected
                period.
              </p>

              <div class="flex items-center justify-center mt-8">
                <div class="relative size-32">
                  <svg
                    class="size-full"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      class="stroke-current text-gray-200 dark:text-neutral-700"
                      stroke-width="7"
                    ></circle>
                    <g class="origin-center -rotate-90 transform">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        class="stroke-current text-info-600 dark:text-blue-500"
                        stroke-width="7"
                        stroke-dasharray="100"
                        stroke-dashoffset="0"
                      ></circle>
                    </g>
                  </svg>
                  <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span class="text-lg font-bold text-gray-800 dark:text-white">
                      {ratingValue.averageRating}
                    </span>
                    <span class="text-xs font-semibold text-gray-600 dark:text-neutral-400 whitespace-nowrap">
                      {ratingValue.totalReviews} Followers
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col space-y-1 mt-8 text-sm">
                {ratingValue1.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">{item.rating}</span>

                    {index == 0 ? (
                      <div className="w-3/4 h-4 bg-green-500 rounded-full"></div>
                    ) : index == 1 ? (
                      <div className="w-1/2 h-4 bg-info-500 rounded-full"></div>
                    ) : index == 2 ? (
                      <div className="w-1/3 h-4 bg-yellow-500 rounded-full"></div>
                    ) : index == 3 ? (
                      <div className="w-1/5 h-4 bg-pink-500 rounded-full"></div>
                    ) : (
                      <div className="w-1/6 h-4 bg-red-500 rounded-full"></div>
                    )}

                    <span className="ml-2">{item.count}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Rating Table */}
      <div class="bg-white shadow-md rounded-lg p-6 w-full mt-6">
        <div class="flex justify-between items-center mt-2">
          <h6 class=" font-bold">Employee Rating</h6>
          <button class="flex items-center border border-gray-300 rounded-full px-3 py-1">
            <span class="flex-grow">Sort</span>&nbsp;
            <svg
              class="h-5 w-5 text-slate-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="6" x2="13" y2="6" />
              <line x1="4" y1="12" x2="11" y2="12" />
              <line x1="4" y1="18" x2="11" y2="18" />
              <polyline points="15 15 18 18 21 15" />
              <line x1="18" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div class="overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-3 py-3 sm:px-6 sm:py-3">
                  Employee Name
                </th>
                <th scope="col" class="px-3 py-3 sm:px-6 sm:py-3">
                  Rating
                </th>
                <th scope="col" class="px-3 py-3 sm:px-6 sm:py-3">
                  Source
                </th>
                <th scope="col" class="px-3 py-3 sm:px-6 sm:py-3">
                  Comments
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                  onClick={() => handleRowClick(user._id)}
                >
                  <td
                    scope="row"
                    class="flex items-center px-3 py-4 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Jese image"
                    />
                    <div class="ps-3">
                      <div class="text-base font-semibold">
                        {user.employee.name}
                      </div>
                      <div class="font-normal text-gray-500">{user._id}</div>
                    </div>
                  </td>
                  <td class="px-3 py-4 sm:px-6 sm:py-4">
                    <div class="flex items-center">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_1569)">
                          <path
                            d="M10.9608 13.3065L14.4997 15.2874L13.7093 11.3096L16.6869 8.556L12.6595 8.07845L10.9608 4.39569V13.3065ZM10.9608 15.2165L5.08291 18.5067L6.39569 11.8998L1.4502 7.32634L8.1394 6.53322L10.9608 0.416504L13.7821 6.53322L20.4713 7.32634L15.5259 11.8998L16.8386 18.5067L10.9608 15.2165Z"
                            fill="#EAC035"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_1569">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0.959961)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span class="ml-2">{user.review.service}</span>
                    </div>
                  </td>

                  <td class="px-3 py-4 sm:px-6 sm:py-4">
                    <div class="flex items-center">{user.employeeID}</div>
                  </td>
                  <td class="px-3 py-4 sm:px-6 sm:py-4">
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a> */}
                    <p>{user.comment}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
