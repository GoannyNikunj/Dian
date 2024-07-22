import React, { useEffect, useState } from "react";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const DropdownButton = ({ title, options, selectedOption, onOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    if (onOptionClick) {
      onOptionClick(title, option);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs px-3 py-1.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center"
      >
        {selectedOption || title}
        <svg
          className="p-1 w-4 h-4 text-gray-800 dark:text-white ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
          <div className="py-1">
            {options.map((option, index) => (
              <a
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const WhatsappMarketingCompaignSubMenu2 = ({ onDataFromChild, onDataFromChild2 }) => {
  const buttonData = [
    {
      title: "Birthday Month",
      options: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    // { title: 'Anniversaries', options: ['1 year', '2 years', '5 years'] },
    { title: "Gender", options: ["Male", "Female"] },
    { title: "Marital Status", options: ["Single", "Married"] },
    {
      title: "Age Group",
      options: ["20 or Below", "21-30", "31-40", "41-50", "50 & Above"],
    },
    { title: "Profession", options: ["Business", "Job", "Student", "Other"] },
    // { title: 'Premium Buyers', options: ['Yes', 'No'] },
    // { title: 'Delivery App Users', options: ['Yes', 'No'] }
  ];

  const [pointerPosition, setPointerPosition] = useState(10);
  const [selectedValues, setSelectedValues] = useState({
    dateOfBirth: "",
    gender: "",
    relationShipStatus: "",
    ageGroup: "",
    profession: "",
  });

  const handlePointerChange = (event) => {
    const newPointerPosition = parseInt(event.target.value);

    // Ensure user can only select specific values
    if ([2, 4, 6, 8, 10].includes(newPointerPosition)) {
      setPointerPosition(newPointerPosition);
      onDataFromChild(newPointerPosition);
    }
  };

  const handleOptionClick = (title, option) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [getTitleKey(title)]: option,
    }));
   
    onDataFromChild2((prevState) => ({
      ...prevState,
      [getTitleKey(title)]: option,
    }));
  };

  const getTitleKey = (title) => {
    switch (title) {
      case "Birthday Month":
        return "dateOfBirth";
      case "Gender":
        return "gender";
      case "Marital Status":
        return "relationShipStatus";
      case "Age Group":
        return "ageGroup";
      case "Profession":
        return "profession";
      default:
        return "";
    }
  };

  return (
    <div className=" p-10 bg-red-100">
      {/* Distance Section */}
      <p class="text-sm md:text-base lg:text-lg xl:text-xl font-bold">
        Distance
      </p>
      {/* <div class="w-full mt-2 p-6 mb-6 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
      <div class="relative mb-4">
        <label for="labels-range-input" class="sr-only">Labels range</label>
        <input id="labels-range-input" type="range" value="9" min="2" max="16" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 transform -translate-x-1/2 -bottom-6">2KM</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 -bottom-6">4KM</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/4 -translate-x-1/2 -bottom-6">6KM</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 -bottom-6">8KM</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-full -translate-x-1/2 -bottom-6">10KM</span>
      </div>
    </div> */}

      <div className=" p-10 bg-red-100">
        {/* Distance Section */}
        <div className="w-full mt-2 p-6 mb-6 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="relative mb-4">
            <label htmlFor="labels-range-input" className="sr-only">
              Labels range
            </label>
            <input
              id="labels-range-input"
              type="range"
              value={pointerPosition}
              min="2"
              max="10"
              step="2"
              onChange={handlePointerChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            {/* Pointer at 4km */}
            <div className="absolute left-1/4 transform -translate-x-1/2 -bottom-6 w-1 h-1 bg-black rounded-full"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 transform -translate-x-1/2 -bottom-6">
              2KM
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 -bottom-6">
              4KM
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/4 -translate-x-1/2 -bottom-6">
              6KM
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 -bottom-6">
              8KM
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-full -translate-x-1/2 -bottom-6">
              10KM
            </span>
          </div>
        </div>
      </div>
      {/* Customer Data Sets Section */}
      <p class="text-sm md:text-base lg:text-lg xl:text-xl font-bold">
        Customer Data Sets
      </p>
      <div className="flex flex-wrap p-1 mt-3 mb-4">
        {buttonData.map((button, index) => (
          <DropdownButton
            key={index}
            title={button.title}
            options={button.options}
            selectedOption={selectedValues[getTitleKey(button.title)]}
            onOptionClick={handleOptionClick}
          />
        ))}
      </div>

      <div class="max-w-xxl mx-auto bg-white shadow-md rounded-md overflow-hidden mt-3">
        {/* Birthday Month */}
        <div class="px-4 py-2  border-gray-200 flex flex-wrap">
          <span class="font-semibold text-sm text-gray-700">
            Birthday Month :
          </span>
          {selectedValues.dateOfBirth == "January" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "January")}
            >
              January
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "January")}
            >
              January
            </span>
          )}
          {selectedValues.dateOfBirth == "February" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "February")}
            >
              February
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "February")}
            >
              February
            </span>
          )}
          {selectedValues.dateOfBirth == "March" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "March")}
            >
              March
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "March")}
            >
              March
            </span>
          )}
          {selectedValues.dateOfBirth == "April" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "April")}
            >
              April
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "April")}
            >
              April
            </span>
          )}
          {selectedValues.dateOfBirth == "May" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "May")}
            >
              May
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "May")}
            >
              May
            </span>
          )}
          {selectedValues.dateOfBirth == "June" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "June")}
            >
              June
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "June")}
            >
              June
            </span>
          )}
          {selectedValues.dateOfBirth == "July" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "July")}
            >
              July
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "July")}
            >
              July
            </span>
          )}
          {selectedValues.dateOfBirth == "August" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "August")}
            >
              August
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "August")}
            >
              August
            </span>
          )}
          {selectedValues.dateOfBirth == "September" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "September")}
            >
              September
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "September")}
            >
              September
            </span>
          )}
          {selectedValues.dateOfBirth == "October" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "October")}
            >
              October
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "October")}
            >
              October
            </span>
          )}
          {selectedValues.dateOfBirth == "November" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "November")}
            >
              November
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "November")}
            >
              November
            </span>
          )}
          {selectedValues.dateOfBirth == "December" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Birthday Month", "December")}
            >
              December
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Birthday Month", "December")}
            >
              December
            </span>
          )}
        </div>

        {/* Anniversary */}
        {/* <div class="px-4 py-2  border-gray-200 flex flex-wrap">
        <span class="font-semibold text-sm text-gray-700">Anniversaries :</span>
        <span class="ml-2 mt-1 text-xs">1st</span>
        <span class="ml-2 mt-1 text-xs">25th</span>
        <span class="ml-2 mt-1 text-xs">50th</span>
        <span class="ml-2 mt-1 text-xs">100th</span>
      </div> */}

        {/* Gender */}
        <div class="px-4 py-2  border-gray-200 flex flex-wrap">
          <span class="font-semibold text-sm text-gray-700">Gender :</span>
          {selectedValues.gender == "Male" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Gender", "Male")}
            >
              Male
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Gender", "Male")}
            >
              Male
            </span>
          )}
          {selectedValues.gender == "Female" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Gender", "Female")}
            >
              Female
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Gender", "Female")}
            >
              Female
            </span>
          )}
        </div>

        {/* Marital Status */}
        <div class="px-4 py-2  border-gray-200 flex flex-wrap">
          <span class="font-semibold text-sm text-gray-700">
            Marital Status :
          </span>
          {selectedValues.relationShipStatus == "Single" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Marital Status", "Single")}
            >
              Single
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Marital Status", "Single")}
            >
              Single
            </span>
          )}
          {selectedValues.relationShipStatus == "Married" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Marital Status", "Married")}
            >
              Married
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Marital Status", "Married")}
            >
              Married
            </span>
          )}
        </div>

        {/* Age Group */}
        <div class="px-4 py-2  border-gray-200 flex flex-wrap">
          <span class="font-semibold text-sm text-gray-700">Age Group :</span>
          {selectedValues.ageGroup == "20 or Below" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Age Group", "20 or Below")}
            >
              20 or Below
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Age Group", "20 or Below")}
            >
              20 or Below
            </span>
          )}
          {selectedValues.ageGroup == "21-30" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Age Group", "21-30")}
            >
              21-30
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Age Group", "21-30")}
            >
              21-30
            </span>
          )}
          {selectedValues.ageGroup == "31-40" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Age Group", "31-40")}
            >
              31-40
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Age Group", "31-40")}
            >
              31-40
            </span>
          )}
          {selectedValues.ageGroup == "41-50" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Age Group", "41-50")}
            >
              41-50
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Age Group", "41-50")}
            >
              41-50
            </span>
          )}
          {selectedValues.ageGroup == "50 & Above" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Age Group", "50 & Above")}
            >
              50 & Above
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Age Group", "50 & Above")}
            >
              50 & Above
            </span>
          )}
        </div>

        {/* Profession */}
        <div class="px-4 py-2  border-gray-200 flex flex-wrap">
          <span class="font-semibold text-sm text-gray-700">Profession :</span>

          {selectedValues.profession == "Business" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Profession", "Business")}
            >
              Business
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Profession", "Business")}
            >
              Business
            </span>
          )}

          {selectedValues.profession == "Job" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Profession", "Job")}
            >
              Job
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Profession", "Job")}
            >
              Job
            </span>
          )}

          {selectedValues.profession == "Student" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Profession", "Student")}
            >
              Student
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Profession", "Student")}
            >
              Student
            </span>
          )}

          {selectedValues.profession == "Other" ? (
            <span
              class="ml-2 mt-1 text-xs"
              style={{ color: "blue" }}
              onClick={() => handleOptionClick("Profession", "Other")}
            >
              Other
            </span>
          ) : (
            <span
              class="ml-2 mt-1 text-xs"
              onClick={() => handleOptionClick("Profession", "Other")}
            >
              Other
            </span>
          )}
        </div>

        {/* Premium Buyer */}
        {/* <div class="px-4 py-2  border-gray-200 flex flex-wrap">
        <span class="font-semibold text-sm text-gray-700">Premium Buyer :</span>
        <span class="ml-2 mt-1 text-xs">Yes</span>
        <span class="ml-2 mt-1 text-xs">No</span>
      </div> */}

        {/* Delivery App Users */}
        {/* <div class="px-4 py-2  border-gray-200 flex flex-wrap">
        <span class="font-semibold text-sm text-gray-700">Delivery App Users :</span>
     
      </div> */}
      </div>
    </div>
  );
};

export default WhatsappMarketingCompaignSubMenu2;
