import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { tableData } from "@/constant/table-data";

import Textinput2 from "@/components/ui/Textinput4";

const InvoiceAddPage = () => {
  const [picker, setPicker] = useState(new Date());
  return (

    <>
    
    <div class="outer-parent" style={{position:"relative"}}>
  
  <div class="lower-sub-div" style={{width:"100%",marginBottom:"40px"}}>

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
              {/* <div style={{ position: "relative", backgroundColor: "white", height: "44px", width: "calc(400% + 1.25rem)" }}>
                <div style={{ width: "20%", height: "100%", backgroundColor: "#9D3AFF", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
                    <img src="/src/assets/images/icon/BusinessDescription.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"20px",width:"20px",marginRight:"0px"}} />
                      <textarea id="w3review" name="w3review" rows="4" cols="50" style={{position:"absolute",left:"44px",top:"calc(50% - 14px)",height:"24px",width:"calc(100% - 44px)",marginRight:"0px",backgroundColor:"transparent",fontSize:"20px",color:"white",fontWeight:"700"}}>
                          Business Description 
                      </textarea>
                </div>
              </div>  */}
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="upper-sub-div" style={{width:"100%",marginBottom:"40px"}}>

  <div style={{ position: "relative", backgroundColor: "white", height: "44px",left:"10px"}}>
  <div style={{ width: "60%", height: "100%", backgroundColor: "#9D3AFF", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"}}>
  <img src="/src/assets/images/icon/BusinessDescription.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"20px",width:"20px",marginRight:"0px"}} />
  <textarea id="w3review" name="w3review" rows="4" cols="50" style={{position:"absolute",left:"44px",top:"calc(50% - 14px)",height:"100%",width:"calc(100% - 44px)",marginRight:"0px",backgroundColor:"transparent",fontSize:"18px",color:"white",fontWeight:"600"}}>
  Business Description 
  </textarea>
  </div>
  <div class="flex justify-end p-4">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1066 7.98098L11.9281 6.80246L4.16667 14.5639V15.7424H5.34518L13.1066 7.98098ZM14.2851 6.80246L15.4636 5.62395L14.2851 4.44544L13.1066 5.62395L14.2851 6.80246ZM6.03553 17.4091H2.5V13.8736L13.6958 2.67768C14.0213 2.35223 14.5489 2.35223 14.8743 2.67768L17.2314 5.03469C17.5568 5.36013 17.5568 5.88777 17.2314 6.21321L6.03553 17.4091Z" fill="#949FAC"/>
    </svg>
</div>
</div>


  </div>
  
  <div class="lower-sub-div" style={{width:"100%",marginBottom:"40px"}}>

  <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">
      <div style={{ margin: 0,width:"100%",maxWidth: "608px",marginLeft:"auto",marginRight:"auto" }}>
        <div className="outer-parent" style={{ display: 'flex', justifyContent: 'center', height: '238px', maxWidth: '608px',width:"100%"}}>
          <div className="inner-div" style={{ height: '238px', width: 'calc(100% - 20px)', maxWidth: '608px', margin: '0 10px', '@media (min-width: 628px)': { width: '608px' } }}>
              <div class="flex items-center justify-center w-full" style={{border:"1px solid #D9DDE3",borderRadius:"10px",marginBottom:"30px"}}>
                <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" style={{borderStyle:"none"}}>
                  {/* <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <textarea class="text-xs text-gray-500 dark:text-gray-400" style={{fontSize:"14px",textAlign:"center",marginTop:"64px"}}>Click on the button or drag files here to upload the images and an introductory short video</textarea>
                  </div> */}
                  <textarea class="text-xs text-gray-500 dark:text-gray-400" style={{fontSize:"14px",textAlign:"center",marginTop:"64px",width:"100%",height:"100%"}}>Click on the button or drag files here to upload the images and an introductory short video</textarea>
                </label>
              </div>  
          </div>
        </div>
      </div>
    </div>

  </div>

  </div>

    </>
    
  );
};

export default InvoiceAddPage;

