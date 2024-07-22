import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import dayjs from "dayjs";
import Datepicker from "react-tailwindcss-datepicker";
const HomeBredCurbs = ({ title, title2, handleClick }) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleClickWithParam = (SubComponentFunctionparameter) => {
    handleClick(SubComponentFunctionparameter);
  }

  return (
    <>
      <div class="flex flex-wrap items-center">
        <button class="bg-white border hover:bg-blue-500 hover:text-white text-black-500 py-2 px-2 rounded-full mr-1 mb-2 lg:mb-0 lg:mr-2 text-sm"
          onClick={() => handleClick('today')}>
            {" "}Today{" "}
            </button>
        <button class="bg-white border hover:bg-blue-500 hover:text-white text-black-500 py-2 px-2 rounded-full mr-1 mb-2 lg:mb-0 lg:mr-2 text-sm"
         onClick={() => handleClick('thisWeek')}>This Week</button>
        <button class="bg-white border hover:bg-blue-500 hover:text-white text-black-500 py-2 px-2 rounded-full mr-1 mb-2 lg:mb-0 lg:mr-2 text-sm"
        onClick={() => handleClick('last3Months')}>Last 3 Months</button>
        <button class="bg-white border hover:bg-blue-500 hover:text-white text-black-500 py-2 px-2 rounded-full mr-1 mb-2 lg:mb-0 lg:mr-2 text-sm"
        onClick={() => handleClick('last6Months')}>Last 6 Months</button>
        <button class="bg-white border hover:bg-blue-500 hover:text-white text-black-500 py-2 px-2 rounded-full mb-2 lg:mb-0 text-sm"
         onClick={() => handleClick('lastYear')}>Yearly</button>
         
        <p class="ml-2 text-sm italic lg:text-base">All data shown w.r.t. Previous Week</p>
      </div>

    </>


  );
};

export default HomeBredCurbs;
