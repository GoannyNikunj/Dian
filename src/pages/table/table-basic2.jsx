// import React from "react";

// // slice(0, 10) is used to limit the number of rows to 10
// const rows = tableData.slice(0, 7);

// const BasicTablePage = () => {
//   return (
    // <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
    //   <Card title="basic table" noborder>
    //     <div className="overflow-x-auto -mx-6">
    //       <div className="inline-block min-w-full align-middle">
    //         <div className="overflow-hidden ">
    //           <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
    //             <thead className=" border-t border-slate-100 dark:border-slate-800">
    //               <tr>
    //                 {columns.map((column, i) => (
    //                   <th key={i} scope="col" className=" table-th ">
    //                     {column.label}
    //                   </th>
    //                 ))}
    //               </tr>
    //             </thead>
    //             <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
    //               {rows.map((row, i) => (
    //                 <tr key={i}>
    //                   <td className="table-td">{row.age}</td>
    //                   <td className="table-td">{row.first_name}</td>
    //                   <td className="table-td ">{row.email}</td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </Card>
    // </div>
//   );
// };

// export default BasicTablePage;

import React, { useState } from "react";
import Button from "@/components/ui/Button";
// import Button2 from "@/components/ui/Button2";
import Card from "@/components/ui/Card2";
import Card2 from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import { tableData } from "@/constant/table-data";
import Flatpickr from "react-flatpickr";

const columns = [
    {
      label: "Age",
      field: "age",
    },
    {
      label: "First Name",
      field: "first_name",
    },
  
    {
      label: "Email",
      field: "email",
    },
  ];

  const rows = tableData.slice(0, 7);

const InvoiceAddPage = () => {
  const [picker, setPicker] = useState(new Date());
  return (
    <div>
      <Card2 title="Profile">

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">

        <div style={{ margin: 0,width:"100%",maxWidth: "608px",marginLeft:"auto",marginRight:"auto" }}>
      <div className="outer-parent" style={{ display: 'flex', justifyContent: 'center', height: '238px', maxWidth: '608px',width:"100%"}}>
        <div className="inner-div" style={{ height: '238px', width: 'calc(100% - 20px)', maxWidth: '608px', margin: '0 10px', '@media (min-width: 628px)': { width: '608px' } }}>
          
<div class="flex items-center justify-center w-full" style={{border:"1px solid #D9DDE3",borderRadius:"10px",marginBottom:"30px"}}>
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" style={{borderStyle:"none"}}>
        <div class="flex flex-col items-center justify-center pt-5 pb-6">

          <div style={{width:"155px",height:"34px",border:"1px solid #4880FF",borderRadius:"5px",position:"relative"}}>
            
          <img src="/src/assets/images/icon/FileUpload.svg" class="placeholder-image" alt="Placeholder Image" style={{height:"20px",width:"20px",position:"absolute",left:"7px",top:"7px"}} />
          <h1 style={{position:"absolute",left:"37px",fontWeight:"500",fontSize:"18px",marginTop:"8px",color:"#4880FF"}} >Upload Logo</h1>
          </div>

            <p class="text-xs text-gray-500 dark:text-gray-400" style={{fontSize:"14px",textAlign:"center",marginTop:"64px"}}>Click on the button or drag files here to upload the images and an introductory short video</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>  

{/* Second */}

<div style={{ position: "relative", backgroundColor: "white", height: "44px", width: "calc(400% + 1.25rem)" }}>
  <div style={{ width: "20%", height: "100%", backgroundColor: "#9D3AFF", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
  <img src="/src/assets/images/icon/BusinessDescription.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"20px",width:"20px",marginRight:"0px"}} />
  <textarea id="w3review" name="w3review" rows="4" cols="50" style={{position:"absolute",left:"44px",top:"calc(50% - 14px)",height:"24px",width:"calc(100% - 44px)",marginRight:"0px",backgroundColor:"transparent",fontSize:"20px",color:"white",fontWeight:"700"}}>
  Business Description 
  </textarea>
  </div>
</div> 

        </div>
      </div>
    </div>

        {/* <div style={{width:"608px",border:"1px solid red",height:"238px",borderRadius:"10px",backgroundColor:"#F7F8FA"}}>

          Hey

        </div> */}

      {/* <Card title="basic table" noborder>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className=" border-t border-slate-100 dark:border-slate-800">
                  <tr>
                    {columns.map((column, i) => (
                      <th key={i} scope="col" className=" table-th ">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td className="table-td">{row.age}</td>
                      <td className="table-td">{row.first_name}</td>
                      <td className="table-td ">{row.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card> */}

    </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            
            <div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                  <div style={{ position: "relative", backgroundColor: "white", height: "44px", width: "calc(400% + 1.25rem)" }}>
                    <div style={{ width: "20%", height: "100%", backgroundColor: "#19CCB7", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
                    <img src="/src/assets/images/icon/About.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"20px",width:"20px",marginRight:"0px"}} />
                    <textarea id="w3review" name="w3review" rows="4" cols="50" style={{position:"absolute",left:"44px",top:"calc(50% - 14px)",height:"24px",width:"calc(100% - 44px)",marginRight:"0px",backgroundColor:"transparent",fontSize:"20px",color:"white",fontWeight:"700"}}>
                      About
                    </textarea>
                  </div>
                </div>
              </div>
            </div>

            <br/>

            <Textinput label="Business Name" type="text" placeholder="Add your name" />
            <Textinput label="Person Name" type="text" placeholder="Add your phone" />
            
            <Textinput label="Email Id" type="text" placeholder="Add your name" />
            <Textinput label="Pincode" type="text" placeholder="Add your phone" />

            <Textinput label="City" type="text" placeholder="Add your name" />
            <Textinput label="Phone Number" type="text" placeholder="Add your phone" />

            <Textinput label="Pan Number" type="text" placeholder="Add your name" />
            <Textinput label="GST Number" type="text" placeholder="Add your phone" />
            
            <Textinput label="Whatsapp Business Api Number" type="text" placeholder="Add your name" />
            <Textinput label="Facebook Manager Id" type="text" placeholder="Add your phone" />
            
            <div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                    
  <div style={{ position: "relative", backgroundColor: "white", height: "44px", width: "calc(400% + 1.25rem)" }}>
  <div style={{ width: "20%", height: "100%", backgroundColor: "#FF4995", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
  <img src="/src/assets/images/icon/BankDetails.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"20px",width:"20px",marginRight:"0px"}} />
  <textarea id="w3review" name="w3review" rows="4" cols="50" style={{position:"absolute",left:"44px",top:"calc(50% - 14px)",height:"24px",width:"calc(100% - 44px)",marginRight:"0px",backgroundColor:"transparent",fontSize:"20px",color:"white",fontWeight:"700"}}>
  Bank Details
  </textarea>
  </div>
</div>

                  </div>
            </div>

            <br/>

            <Textinput label="Account Holder Name" type="text" placeholder="Add your name" />
            <Textinput label="Account Number" type="text" placeholder="Add your phone" />

            <Textinput label="IFSC code" type="text" placeholder="Add your name" />
            <Textinput label="Pincode" type="text" placeholder="Add your phone" />

          </div>
          {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="lg:col-span-2 col-span-1 text-slate-900 text-base dark:text-slate-300 font-medium">
              Owner info-500
            </div>

            <Textinput label="Name" type="text" placeholder="Add your name" />
            <Textinput label="Phone" type="text" placeholder="Add your phone" />
            <div className="lg:col-span-2 col-span-1">
              <Textinput
                label="Email"
                type="email"
                placeholder="Add your email"
              />
            </div>

            <div className="lg:col-span-2 col-span-1">
              <Textarea
                label="Address"
                type="email"
                placeholder="address"
                rows="2"
              />
            </div>
          </div> */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
      <button style={{backgroundColor:"#4880FF",width:"269px",height:"44px",borderRadius:"10px",fontWeight:"700",fontSize:"20px",color:"white"}}>Update</button>
    </div>
      </Card2>
    </div>
  );
};

export default InvoiceAddPage;

