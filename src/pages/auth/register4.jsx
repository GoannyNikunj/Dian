import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import RegForm from "./common/reg-from";
import RegForm2 from "./common/reg-from2";
import Social from "./common/social";
import { ToastContainer } from "react-toastify";
import Card from "@/components/ui/Card";
// image import
import LogoWhite from "@/assets/images/logo/logo-white.svg";
import ProgressBar from "@/components/ui/ProgressBar";
import Logo from "@/assets/images/logo/logo.svg";
import Illustration from "@/assets/images/auth/list3.jpg";
import { RiWallet3Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import "tailwindcss/tailwind.css";
import Donut from "../chart/appex-chart/Donut"

const register = () => {
  const [isDark] = useDarkMode();

  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowElement(window.innerWidth >= 1440);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}

      <div className="loginwrapper">
        <div className="lg-inner-column">
          {showElement && (
            <div
              className=" w-2/3 relative z-[1]"
            >
              <div
                className="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
                style={{
                  background: "linear-gradient(to right, #065AD8, #033072)",
                }}
              >
                <div
                  className="auth-box h-full flex flex-col justify-center"
                  style={{ maxWidth: "none" }}
                >
                  <div
                    className="absolute left-0 w-full z-10"
                    style={{ height: "100%" }}
                  >
                    <img
                      src={Illustration}
                      alt=""
                      className="w-full"
                      style={{ height: "100vh" }}
                    />
                  </div>

                  <div>
                    <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
                      <h1 className="text-white text-3xl font-bold">
                        Let's get Started
                      </h1>
                      <h6 className="text-sm text-white">
                        Customer service shouldn't just be a department,It
                        should be the entire company{" "}
                      </h6>
                    </div>
                  </div>
                  <br></br>

                  <div className=" grid grid-cols-2 gap-56">
                    <Card className=" w-56 mt-10 ml-10">
                      <span className="text-xs font-bold">
                        Rating Distribution
                      </span>
                      <p className="" style={{ fontSize: 8 }}>
                        Breakdown of rating and review source during the
                        selected period.
                      </p>
                      <div class="flex items-center justify-center">
                        <div class="relative size-20">
                          <svg
                            class="size-full"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="18"
                              cy="18"
                              r="16"
                              fill="none"
                              class="stroke-current text-gray-200 dark:text-neutral-700"
                              stroke-width="4"
                            ></circle>
                            <g class="origin-center -rotate-90 transform">
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                class="stroke-current text-blue-600 dark:text-blue-500"
                                stroke-width="4"
                                stroke-dasharray="100"
                                stroke-dashoffset="25"
                              ></circle>
                            </g>
                          </svg>
                          <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span class="text-center text-l font-bold text-gray-800 dark:text-white">
                              4.83
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div
                          class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs 
        text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-500"
                            style={{ width: 96 }}
                          ></div>
                        </div>
                        <div class="w-10 text-end">
                          <span class="text-xs font-bold text-black dark:text-white">
                            96
                          </span>
                          &nbsp;
                          <span class="text-xs text-gray-800 dark:text-white">
                            (40%)
                          </span>
                        </div>
                      </div>
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div
                          class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center rounded-full overflow-hidden bg-info-600 text-xs 
        text-white text-center whitespace-nowrap transition duration-500 dark:bg-info-500"
                            style={{ width: 70 }}
                          ></div>
                        </div>
                        <div class="w-10 text-end">
                          <span class="text-xs font-bold text-black dark:text-white">
                            96
                          </span>
                          &nbsp;
                          <span class="text-xs text-gray-800 dark:text-white">
                            (40%)
                          </span>
                        </div>
                      </div>
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div
                          class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-600 text-xs 
        text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-500"
                            style={{ width: 60 }}
                          ></div>
                        </div>
                        <div class="w-10 text-end">
                          <span class="text-xs font-bold text-black dark:text-white">
                            96
                          </span>
                          &nbsp;
                          <span class="text-xs text-gray-800 dark:text-white">
                            (40%)
                          </span>
                        </div>
                      </div>
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div
                          class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center rounded-full overflow-hidden bg-pink-600 text-xs 
        text-white text-center whitespace-nowrap transition duration-500 dark:bg-pink-500"
                            style={{ width: 45 }}
                          ></div>
                        </div>
                        <div class="w-10 text-end">
                          <span class="text-xs font-bold text-black dark:text-white">
                            96
                          </span>
                          &nbsp;
                          <span class="text-xs text-gray-800 dark:text-white">
                            (40%)
                          </span>
                        </div>
                      </div>
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div
                          class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center rounded-full overflow-hidden bg-red-600 text-xs 
        text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500"
                            style={{ width: 30 }}
                          ></div>
                        </div>
                        <div class="w-10 text-end">
                          <span class="text-xs font-bold text-black dark:text-white">
                            96
                          </span>
                          &nbsp;
                          <span class="text-xs text-gray-800 dark:text-white">
                            (40%)
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className=" w-60 h-72">
                      <Donut />
                      <p
                        className="font-bold text-center"
                        style={{ fontSize: 12 }}
                      >
                        Overview of Customer Overflow
                      </p>
                      <p className="text-center" style={{ fontSize: 10 }}>
                        01 January 2023 - 01 December 2023
                      </p>
                      <div class="flex flex-wrap -mx-1">
                        <div class="w-full md:w-1/3 px-1 mb-2 text-center">
                          <div class="bg-white p-1 justify-center text-center">
                            <p class="text-xs">
                              <svg
                                height="40"
                                width="40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle r="5" cx="30" cy="30" fill="red" />
                              </svg>
                            </p>
                            <p className=" text-xs font-bold">Female</p>
                            <p>57</p>
                          </div>
                        </div>
                        <div class="w-full md:w-1/3 px-1 mb-2 text-center">
                          <div class="bg-white p-1">
                            <p class="text-xs text-center">
                              <svg
                                height="40"
                                width="40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle r="5" cx="30" cy="30" fill="green" />
                              </svg>
                            </p>
                            <p className=" text-xs font-bold">Male</p>
                            <p>57</p>
                          </div>
                        </div>
                        <div class="w-full md:w-1/3 px-1 mb-2 text-center">
                          <div class="bg-white p-1">
                            <p class="text-xs text-center">
                              <svg
                                height="40"
                                width="40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle r="5" cx="30" cy="30" fill="yellow" />
                              </svg>
                            </p>
                            <p className=" text-xs font-bold">Other</p>
                            <p>57</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="flex justify-center items-center">
                    <Card className=" w-56 h-48">
                      <p className=" text-xs text-center font-bold text-blue-600 mt-0">
                        Your Wallet Balance
                      </p>
                      <div class="flex justify-center items-center pt-2 pb-2">
                        <span class="text-xl font-bold text-black-500">
                          &#8377;
                        </span>
                        <span class="text-lg font-bold text-black-500">
                          500,000{" "}
                        </span>
                      </div>
                      <p className="text-center text-xs">
                        The simplest method to handle your finances.Tracking
                        your account made easy.
                      </p>
                      <div class="flex justify-center mt-4 gap-1">
                        <button
                          type="button"
                          class="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border 
        border-gray-200  text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 
        disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 
        dark:hover:bg-neutral-800"
                        >
                          <IoWalletOutline />
                          Deposite
                        </button>
                        <button
                          type="button"
                          class="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border 
        border-gray-200 text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 
        disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 
        dark:hover:bg-neutral-800"
                        >
                          <RiWallet3Line />
                          Withdraw
                        </button>
                      </div>
                    </Card>
                  </div>
                  <h6 className=" text-center text-sm text-white m-2">
                    From broadening your market reach with performance tracking
                    to handling your finances, we're here to lighten your load
                    and boost your profit margin.
                  </h6>
                </div>
              </div>
            </div>
          )}

          <div className="right-column relative bg-white dark:bg-slate-800">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="mobile-logo text-center mb-6 lg:hidden block">
                  {/* <Link to="/">
                    <img
                      src={isDark ? LogoWhite : Logo}
                      alt=""
                      className="mx-auto"
                    />
                  </Link> */}
                </div>
                <div className="text-center 2xl:mb-10 mb-5">
                  <h4 className="font-medium">Sign Up</h4>
                </div>
                <RegForm2 />
                <div
                  className="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 
                uppercase text-sm"
                >
                  Already a member?
                  <Link
                    to="/"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
