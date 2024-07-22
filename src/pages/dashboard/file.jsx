
import React, { useState } from 'react';

const DropdownButton = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs px-3 py-1.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center"
      >
        {title}
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
                href="#"
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

const DropdownButtonsGroup = () => {
  const buttonData = [
    { title: 'Birthday Month', options: ['January', 'February', 'March', 'April'] },
    { title: 'Anniversaries', options: ['1 year', '2 years', '5 years'] },
    { title: 'Gender', options: ['Male', 'Female', 'Other'] },
    { title: 'Marital Status', options: ['Single', 'Married', 'Divorced'] },
    { title: 'Age Group', options: ['18-24', '25-34', '35-44', '45+'] },
    { title: 'Profession', options: ['Student', 'Engineer', 'Doctor'] },
    { title: 'Premium Buyers', options: ['Yes', 'No'] },
    { title: 'Delivery App Users', options: ['Yes', 'No'] }
  ];

  return (
    <div className="flex flex-wrap p-1 mt-3 mb-4">
      {buttonData.map((button, index) => (
        <DropdownButton key={index} title={button.title} options={button.options} />
      ))}
    </div>
  );
};

export default DropdownButtonsGroup;