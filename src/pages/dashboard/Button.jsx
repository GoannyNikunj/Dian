
import React, { useState } from "react";

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
        <svg className="p-1 w-4 h-4 text-gray-800 dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
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

const WhatsappMarketingCompaignSubMenu2 = (props) => {
  const [selectedValues, setSelectedValues] = useState({
    dateOfBirth: "",
    gender: "",
    relationShipStatus: "",
    ageGroup: "",
    profession: "",
  });

  const buttonData = [
    { title: 'Birthday Month', options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] },
    { title: 'Gender', options: ['Male', 'Female'] },
    { title: 'Marital Status', options: ['Single', 'Married'] },
    { title: 'Age Group', options: ['20 or Below', '21-30', '31-40', '41-50', '50 & Above'] },
    { title: 'Profession', options: ['Business', 'Job', 'Student', 'Other'] },
  ];

  const handleOptionClick = (title, option) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [getTitleKey(title)]: option,
    }));
    console.log(`Option "${option}" clicked for "${title}"`);
  };

  const getTitleKey = (title) => {
    switch (title) {
      case 'Birthday Month':
        return 'dateOfBirth';
      case 'Gender':
        return 'gender';
      case 'Marital Status':
        return 'relationShipStatus';
      case 'Age Group':
        return 'ageGroup';
      case 'Profession':
        return 'profession';
      default:
        return '';
    }
  };

  console.log("Value ",selectedValues);

  return (
    <div className="p-10 bg-red-100">
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
      {/* <pre>{JSON.stringify(selectedValues, null, 2)}</pre> */}
    </div>
  );
};

export default WhatsappMarketingCompaignSubMenu2;