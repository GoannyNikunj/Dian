import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

// import images
import img1 from "@/assets/images/all-img/big-shap1.png";
import img2 from "@/assets/images/all-img/big-shap2.png";
import img3 from "@/assets/images/all-img/big-shap3.png";
import img4 from "@/assets/images/all-img/big-shap4.png";

const tables = [
  {
    title: "Advanced",
    price_Yearly: "$96",
    price_Monthly: "$26",
    button: "Buy now",
    bg: "bg-warning-500",
    img: img1,
  },
  {
    title: "Business",
    price_Yearly: "$196",
    price_Monthly: "$20",
    button: "Buy now",
    bg: "bg-info-500",
    ribon: "Most popular",
    img: img2,
  },
  {
    title: "Basic",
    price_Yearly: "$26",
    price_Monthly: "$16",
    button: "Try it free",
    bg: "bg-success-500",
    img: img3,
  },
  {
    title: "Got a large team?",
    price_Yearly: "$126",
    price_Monthly: "$16",
    button: "Request a quote",
    bg: "bg-primary-500",
    img: img4,
  },
];
const tables2 = [
  {
    title: "Starter",
    price_Yearly: "₹500",
    price_Monthly: "$26",
    button: "Purchase Now",
    buttoncolr: "#19CCB7",
    bg: "bg-white",
  },
  {
    title: "Growth",
    price_Yearly: "₹500",
    price_Monthly: "$20",
    button: "Purchase Now",
    buttoncolr: "#FF4995",
    bg: "bg-white",
    ribon: "Most popular",
  },
  {
    title: "Advanced",
    price_Yearly: "₹500",
    price_Monthly: "$16",
    button: "Purchase Now",
    buttoncolr: "#EBA900",
    bg: "bg-white",
  }
];
const PricingPage = () => {
  const [check, setCheck] = useState(true);
  const toggle = () => {
    setCheck(!check);
  };

  return (
    <div>
    <h6 class="text-xl lg:text-3xl text-center">Flexible Plans and Pricing</h6>

  
    <div className="space-y-5 mt-5">
  
      <ul class="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
        <li class="me-2">
          <a href="#" class="inline-block px-4 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-current="page">Monthly</a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-block px-4 py-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Half-Yearly</a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-block px-4 py-3  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Yearly</a>
        </li>
      </ul>
  
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
        {tables2.map((item, i) => (
          <div className={`${item.bg} price-table rounded-lg shadow-base dark:bg-slate-800 p-6 text-slate-900 dark:text-white relative overflow-hidden`} key={i}>
            <div className="overlay absolute right-0 top-0 w-full h-full">
              <img src={item.img} alt="" className="ml-auto block" />
            </div>
            {item.ribon && (
              <div className="text-sm font-medium bg-slate-900 dark:bg-slate-900 text-white py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45" style={{ backgroundColor: "#FF4995" }}>
                {item.ribon}
              </div>
            )}
            <header className="mb-3">
              <h4 className={` ${item.bg === "bg-slate-900" ? "text-slate-100" : "text-slate-900 dark:text-slate-300"} text-xl mb-5 text-center`}>
                {item.title}
              </h4>
              <div className={`space-x-4 relative flex items-center mb-3 justify-center`}>
                <span className="text-[32px] leading-10 font-medium block text-center">
                  {check ? item.price_Yearly : item.price_Monthly}
                </span>
              </div>
              <p className={`${item.bg === "bg-slate-900" ? "text-slate-100" : "text-slate-500 dark:text-slate-300"} text-sm`}>
                per user/month, annually
              </p>
            </header>
            <div className="price-body space-y-8">
              <p className={`${item.bg === "bg-slate-900" ? "text-slate-100" : "text-slate-600 dark:text-slate-300"} text-sm leading-5`}>
                Designed for teams who need to manage complex workflows with more automation and integration.
              </p>
              <div style={{ backgroundColor: item.buttoncolr , color:"white" }} className="rounded-lg">
                <Button
                  text={item.button}
                  className={`w-full ${item.bg === "bg-slate-900" ? "text-slate-100 border-slate-300 border" : "btn-outline-white dark:border-slate-400"}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default PricingPage;
