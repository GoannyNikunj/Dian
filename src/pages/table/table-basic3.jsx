import React, { useState } from "react";
import Card2 from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import InvoiceAddPage2 from "./table-basic5"
import InvoiceAddPage3 from "./table-basic4"

const InvoiceAddPage = () => {

  const [picker, setPicker] = useState(new Date());

  const handleUpdateClick = () => {
    InvoiceAddPage2.handleApiCall();
  };

  return (

    <div>

      <Card2 title="Profile">

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
         
         <InvoiceAddPage3/>
     
         <InvoiceAddPage2/>
     
         </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
          <button style={{backgroundColor:"#4880FF",width:"269px",height:"44px",borderRadius:"10px",fontWeight:"700",fontSize:"20px",color:"white"}} onClick={handleUpdateClick}>Update</button>
        </div>

      </Card2>

    </div>

  );

};

export default InvoiceAddPage;

