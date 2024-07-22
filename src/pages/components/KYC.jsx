import React from "react";
import kyc1 from "../../assets/images/icon/kyc1.png";
import kyc2 from "../../assets/images/icon/kyc2.png";
import kyc3 from "../../assets/images/icon/kyc3.png";
import kyc4 from "../../assets/images/icon/kyc4.png";

const KYC = (props) => {
  var popularDayTimeobject = props.FourthDataKey.popularDayTime;

  const popularDayTimeobjectkeys = [];
  const popularDayTimeobjectvalues = [];

  for (let key in popularDayTimeobject) {
    popularDayTimeobjectkeys.push(key);
    popularDayTimeobjectvalues.push(popularDayTimeobject[key]);
  }


  // function convertKeysToString(obj) {

  // const newObj = {};

  // for (let key in obj) {
  // newObj['"' + key + '"'] = obj[key];
  // }

  // return newObj;

  // }

  // const newObj = convertKeysToString(a);

  // console.log(newObj.day,"day");

  const datakyc = [
    {
      // name: shapeLine1,
      title: "Popular Location",
      count: "VimanNagar",
      count2: "21%",
      bg: "bg-[#FFEDE5] dark:bg-slate-900	",
      iimg: kyc1,
    },
    {
      // name: shapeLine2,
      title: "Popular Day and Time",
      count: "Tuesday 3PM-5AM",
      count2: "21%",
      bg: "bg-[#FFEDE5] dark:bg-slate-900	",
      iimg: kyc2,
    },
    {
      // name: shapeLine3,
      title: "Popular Age Group",
      count: "25-30",
      count2: "21%",
      bg: "bg-[#FFEDE5] dark:bg-slate-900	",
      iimg: kyc3,
    },
    {
      // name: shapeLine1,
      title: "Popular Profession",
      count: "Business",
      count2: "21%",
      bg: "bg-[#FFEDE5] dark:bg-slate-900	",
      iimg: kyc4,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {datakyc.map((item, i) => (
          <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg h-28 justify-center">
              <div className="flex">
                <div className=" w-2/3 p-6">
                  <p className="text-gray-600 text-sm text-wrap">
                    {item.title}
                  </p>

                  {/* {i === 0 ? ( <p className="text-md font-bold text-wrap text-black-500"> {props.FourthDataKey.popularLocation} </p> ) : i === 1 ? ( <p className="text-md font-bold text-wrap text-black-500"> {props.FourthDataKey.popularDayTime.day} <br /> {props.FourthDataKey.popularDayTime.time} </p> ) : i === 2 ? ( <p className="text-md font-bold text-wrap text-black-500"> {props.FourthDataKey.popularAgeGroup} </p> ) : i === 3 ? ( <p className="text-md font-bold text-wrap text-black-500"> {props.FourthDataKey.popularProfession} </p> ) : ( <p className="text-md font-bold text-wrap text-black-500"> {props.FourthDataKey.popularProfession} Not Need </p> )} */}

                  {i === 0 ? (
                    <p className="text-md font-bold text-wrap text-black-500">
                      {" "}
                      {props.FourthDataKey.popularLocation}{" "}
                    </p>
                  ) : i === 1 ? (
                    <p className="text-md font-bold text-wrap text-black-500">
                      {" "}
                      {popularDayTimeobjectvalues[0]}{" "}<br/>
                      {popularDayTimeobjectvalues[1]}{" "}
                    </p>
                  ) : i === 2 ? (
                    <p className="text-md font-bold text-wrap text-black-500">
                      {" "}
                      {props.FourthDataKey.popularAgeGroup}{" "}
                    </p>
                  ) : i === 3 ? (
                    <p className="text-md font-bold text-wrap text-black-500">
                      {" "}
                      {props.FourthDataKey.popularProfession}{" "}
                    </p>
                  ) : (
                    <p className="text-md font-bold text-wrap text-black-500">
                      {" "}
                      {props.FourthDataKey.popularProfession} Not Need{" "}
                    </p>
                  )}

                  {/* <p className=" text-md font-bold text-wrap text-black-500"> */}
                  {/* {item.count} */}
                  {/* </p> */}
                </div>
                <div className=" w-1/3  p-6">
                  <img src={item.iimg} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KYC;
