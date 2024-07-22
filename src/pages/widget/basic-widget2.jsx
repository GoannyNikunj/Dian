import React from "react";
import Button from "@/components/ui/Button";

import wbg9 from "@/assets/images/all-img/widget-bg-8.png";

const BasicWidget = () => {
  return (
    <div className="space-y-5">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(${wbg9})`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block text-sm dark:text-slate-800">
                  Current balance,
                </span>
                <span className="block dark:text-slate-800">$34,564</span>
              </h4>
            </div>
          </div>
          <div className="flex-none">
            <Button
              icon="heroicons-outline:eye"
              text="View details"
              btnclassName="btn-light bg-white btn-sm "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicWidget;
