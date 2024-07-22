// import React from "react";
// import Card from "@/components/ui/Card";
// import Button from "@/components/ui/Button3";

// const rows = [
//   {
//     Text: "Food Delivery",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuUp.svg",
//     backgroundColor:"#4770FF",
//     color:"white",
//     Border:"transparent"
//   },
//   {
//     Text: " Lorem Ipsum",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
//   {
//     Text: "Special Occasion",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
//   {
//     Text: "Lorem Ipsum",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
//   {
//     Text: "Lorem Ipsum",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
//   {
//     Text: "Lorem Ipsum",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
//   {
//     Text: "Lorem Ipsum",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
//   {
//     Text: "Lorem Ipsum",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
//   {
//     Text: "Lorem Ipsum",
//     Icon: "/src/assets/images/icon/WhatsappMarketingSubMenuDown.svg",
//     backgroundColor:"white",
//     color:"#6C6F87",
//     Border:"#949FAC"
//   },
// ];

// const WhatsappMarketingCompaignSubMenu1 = () => {
//   return (
//     <div>
//     <div style={{paddingLeft:"30px",paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px"}}>
// <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6" style={{fontSize:"20px",fontWeight:"700"}}>
// Template Library
// </h4><br/>

// <div style={{ display: 'flex', flexWrap: 'wrap' }}>

//       {rows.map((row, i) => (

//         <button style={{ width:"160px",height:"36px",display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0px', border: 'none', backgroundColor: row.backgroundColor, color: 'white', borderRadius: '40px', cursor: 'pointer', margin: '5px',border:`1px solid ${row.Border}` }}>
//           <span style={{ marginRight: '5px' }}><img src={row.Icon} className="placeholder-image" alt="Placeholder Image" style={{ height: "24px", width: "24px" }} /></span>
//           <span style={{ marginLeft: '5px',fontSize:"14px",fontWeight:"700",color:row.color }}>{row.Text}</span>
//         </button>

//       ))}

//     </div>

//     <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
//           {/* {tables2.map((item, i) => (
//             <div
//               className={`${item.bg}

//             price-table rounded-[6px] shadow-base dark:bg-slate-800 p-6 text-slate-900 dark:text-white relative overflow-hidden z-[1]
//             `}
//               key={i}
//             >
//               <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
//                 <img src={item.img} alt="" className="ml-auto block" />
//               </div>
//               {item.ribon && (
//                 <div className="text-sm font-medium bg-slate-900 dark:bg-slate-900 text-white py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45" style={{backgroundColor:"#FF4995"}}>
//                   {item.ribon}
//                 </div>
//               )}
//               <header className="mb-6">
//                 <h4
//                   className={`
//              ${
//                item.bg === "bg-slate-900"
//                  ? "text-slate-100"
//                  : "text-slate-900 dark:text-slate-300"
//              }
//              text-xl mb-5 `}
//                 >
//                   {item.title}
//                 </h4>
//                 <div
//                   className={`
//              ${
//                item.bg === "bg-slate-900"
//                  ? "text-slate-100"
//                  : "text-slate-900 dark:text-slate-300"
//              }
//                 space-x-4 relative flex items-center mb-5 rtl:space-x-reverse`}
//                 >
//                   {check ? (
//                     <span className="text-[32px] leading-10 font-medium">
//                       {item.price_Yearly}{" "}
//                     </span>
//                   ) : (
//                     <span className="text-[32px] leading-10 font-medium">
//                       {item.price_Monthly}
//                     </span>
//                   )}

//                 </div>
//                 <p
//                   className={` text-sm
//              ${
//                item.bg === "bg-slate-900"
//                  ? "text-slate-100"
//                  : "text-slate-500 dark:text-slate-300"
//              }
//                 `}
//                 >
//                   per user/month, annually
//                 </p>
//               </header>
//               <div className="price-body space-y-8">
//                 <p
//                   className={`
//               ${
//                 item.bg === "bg-slate-900"
//                   ? "text-slate-100"
//                   : "text-slate-600 dark:text-slate-300"
//               }
//                 text-sm leading-5
//                 `}
//                 >
//                   Designed for teams who need to manage complex workflows with
//                   more automation and integration.
//                 </p>
//                 <div style={{}}>
//                   <Button
//                     text={item.button}

//                     className={` w-full ${
//                       item.bg === "bg-slate-900"
//                         ? "text-slate-100 border-slate-300 border"
//                         : "btn-outline-dark dark:border-slate-400"
//                     }`}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))} */}
//         </div>

// {/* <div class="upper-sub-div" style={{width:"100%",marginBottom:"40px"}}>

// <div style={{ position: "relative", backgroundColor: "white", height: "44px",left:"10px"}}>
// <div style={{ width: "100%", height: "100%", backgroundColor: "#9D3AFF", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
// <img src="/src/assets/images/icon/BusinessDescription.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"20px",width:"20px",marginRight:"0px"}} />
// <textarea id="w3review" name="w3review" rows="4" cols="50" style={{position:"absolute",left:"44px",top:"calc(50% - 14px)",height:"100%",width:"calc(100% - 44px)",marginRight:"0px",backgroundColor:"transparent",fontSize:"20px",color:"white",fontWeight:"700"}}>
// Business Description
// </textarea>
// </div>
// </div>

// </div> */}

// </div>
// </div>
//   );
// };

// export default WhatsappMarketingCompaignSubMenu1;

import React, { useEffect, useState } from "react";

import { REACT_APP_BASE_URL } from "../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const ImageSlider = (props) => {
  const [startIndex, setStartIndex] = useState(0);

  const [selectedSlide, setSelectedSlide] = useState(null);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === props.slides.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? props.slides.length - 3 : prevIndex - 1
    );
  };

  const TemplateSelectFunction = (slide,index) => {
    setSelectedSlide(slide);

    props.TemplateSetFunctionKey(slide);
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1000px",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        height: "400px", // Set a fixed height for the slider
      }}
    >
      <div
        style={{
          display: "flex",
          transform: `translateX(-${startIndex * (100 / 3)}%)`,
          transition: "transform 0.5s ease",
          height: "100%", // Ensure the slider's height fills the container
        }}
      >
        {props.slides.map((slide, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 33.33%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px", // Add space between cards
              marginRight: "10px", // Add space between cards
              border: selectedSlide === slide ? "2px solid blue" : "none", // Highlight selected slide
            }}
            onClick={() => TemplateSelectFunction(slide,index)}
          >
            <div
              style={{
                background: "#E5E7EB", // Set the background color to grey
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", // Add shadow to the card
                borderRadius: "10px",
                padding: "20px", // Add padding to the card content
                textAlign: "center",
              }}
            >
              <img
                src={slide.image}
                alt={`slide ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px", // Set maximum height for the image
                  objectFit: "contain", // Ensure the image fits within the container
                  borderRadius: "10px",
                  marginBottom: "10px", // Add space between image and description
                }}
              />
              <p className=" text-sm bg-green-200">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {startIndex !== 0 && (
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            zIndex: "1",
          }}
          onClick={prevSlide}
        >
          Prev
        </button>
      )}
      {startIndex < props.slides.length - 3 && (
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            zIndex: "1",
          }}
          onClick={nextSlide}
        >
          Next
        </button>
      )}
    </div>
  );
};

const App = ({ onDataFromChild , onDataFromChild2 }) => {

  const handleClick = (SetTemplateWithFilter) => {
    
  };

  const TemplateSetFunctionValue = (Template) => {
    onDataFromChild(Template);
  };

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "100%" }}>
        <div class="flex justify-between items-center">
          <h6 class="text-lg font-bold">Template Library</h6>
          <button
            type="button"
            class="text-blue-600 bg-white border hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#4880FF" />
            </svg>
            &nbsp;Create New
          </button>
        </div>

        <div class="flex flex-wrap space-x-4 mt-5 mb-5">
          <button
            type="button"
            class="py-1.5 px-3 text-sm bg-white text-black border rounded-full flex items-center justify-center whitespace-nowrap mb-2"
            onClick={() => handleClick('Food Delivery')}
          >
            Food Delivery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M15.293 8.293a1 1 0 0 0-1.414 0L10 11.586 5.707 8.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414z"
              />
            </svg>
          </button>

          <button class="py-1.5 px-3 text-sm bg-white text-black border rounded-full flex items-center justify-center whitespace-nowrap mb-2" onClick={() => handleClick('Festival Season')}>
            Festival Season
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M15.293 8.293a1 1 0 0 0-1.414 0L10 11.586 5.707 8.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414z"
              />
            </svg>
          </button>

          <button class="py-1.5 px-3 text-sm bg-white text-black border rounded-full flex items-center justify-center whitespace-nowrap mb-2" onClick={() => handleClick('Special Occasion')}>
            Special Occasion
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M15.293 8.293a1 1 0 0 0-1.414 0L10 11.586 5.707 8.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414z"
              />
            </svg>
          </button>

        </div>

        <ImageSlider
          slides={onDataFromChild2}
          TemplateSetFunctionKey={TemplateSetFunctionValue}
        />
      </div>
    </>
  );
};

export default App;
