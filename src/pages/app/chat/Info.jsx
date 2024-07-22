import React from "react";
import SimpleBar from "simplebar-react";
import { useSelector } from "react-redux";
import Icon from "@/components/ui/Icon";

// import images
import Image1 from "@/assets/images/chat/sd1.png";
import Image2 from "@/assets/images/chat/sd2.png";
import Image3 from "@/assets/images/chat/sd3.png";
import Image4 from "@/assets/images/chat/sd4.png";
import Image5 from "@/assets/images/chat/sd5.png";
import Image6 from "@/assets/images/chat/sd6.png";

const socials = [
  {
    name: "facebook",
    icon: "bi:facebook",
    link: "#",
  },
  {
    name: "twitter",
    link: "#",
    icon: "bi:twitter",
  },
  {
    name: "instagram",
    link: "#",
    icon: "bi:instagram",
  },
];

const Info = () => {
  const { activechat, user } = useSelector((state) => state.chat);
  return (
    <SimpleBar className="h-full p-6">
      <div className="flex flex-col items-center">
        <div className="h-[100px] w-[100px] rounded-full mb-4">
          <img
            src={user.avatar}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-center">
          <h5 className="text-base text-slate-600 dark:text-slate-300 font-medium mb-1">
            {user.fullName}
          </h5>
        </div>
        <h6 className="text-sm text-slate-600 dark:text-slate-300 font-bold mt-4">
          Personal Details
        </h6>
        <ul className="list-item mt-5 space-y-4 border-b border-slate-100 dark:border-slate-700 pb-5 px-4">
          <li className="flex flex-col sm:flex-row justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
            <div className="flex space-x-2 items-start rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>+91-98123445345</span>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
            <div className="flex space-x-2 items-start rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>rounaksharma123@gmail.com</span>
            </div>
            {/* <div className="font-medium">Oct 2021</div> */}
          </li>
          <li className="flex flex-col sm:flex-row justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
            <div className="flex space-x-2 items-start rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span>Pune,Maharashtra,India</span>
            </div>
            {/* <div className="font-medium">English</div> */}
          </li>
          <li className="flex flex-col sm:flex-row justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
            <div className="flex space-x-2 items-start rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <span>Businessman</span>
            </div>
            {/* <div className="font-medium">English</div> */}
          </li>
          <li className="flex flex-col sm:flex-row justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
            <div className="flex space-x-2 items-start rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
              </svg>
              <span>Birthday: 22 June</span>
            </div>
            {/* <div className="font-medium">English</div> */}
          </li>
          <li className="flex flex-col sm:flex-row justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
            <div className="flex space-x-2 items-start rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <span>Anniversary: 22 June</span>
            </div>
            {/* <div className="font-medium">English</div> */}
          </li>
          <li className="flex flex-col sm:flex-row justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
            <div className="flex space-x-2 items-start rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <span>No Delivery App</span>
            </div>
            {/* <div className="font-medium">English</div> */}
          </li>
        </ul>
        {/* <ul className="list-item space-y-3 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6 mt-5">
        {socials?.map((slink, sindex) => (
          <li
            key={sindex}
            className="text-sm text-slate-600 dark:text-slate-300 leading-[1]"
          >
            <button className="flex space-x-2 rtl:space-x-reverse">
              <Icon icon={slink.icon} className="text-base" />
              <span className="capitalize font-normal text-slate-600 dark:text-slate-300">
                {slink.name}
              </span>
            </button>
          </li>
        ))}
      </ul> */}
        {/* <h4 className="py-4 text-sm text-secondary-500 dark:text-slate-300 font-normal">
        Shared documents
      </h4> */}
        {/* <ul className="grid grid-cols-3 gap-2">
        <li className="h-[46px]">
          <img
            src={Image1}
            alt=""
            className="w-full h-full object-cover rounded-[3px]"
          />
        </li>
        <li className="h-[46px]">
          <img
            src={Image2}
            alt=""
            className="w-full h-full object-cover rounded-[3px]"
          />
        </li>
        <li className="h-[46px]">
          <img
            src={Image3}
            alt=""
            className="w-full h-full object-cover rounded-[3px]"
          />
        </li>
        <li className="h-[46px]">
          <img
            src={Image4}
            alt=""
            className="w-full h-full object-cover rounded-[3px]"
          />
        </li>
        <li className="h-[46px]">
          <img
            src={Image5}
            alt=""
            className="w-full h-full object-cover rounded-[3px]"
          />
        </li>
        <li className="h-[46px]">
          <img
            src={Image6}
            alt=""
            className="w-full h-full object-cover rounded-[3px]"
          />
        </li>
      </ul> */}
      </div>
    </SimpleBar>
  );
};

export default Info;
