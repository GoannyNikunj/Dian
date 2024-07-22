import React, { useState } from "react";
import Card2 from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import InvoiceAddPage2 from "./table-basic4";

const InvoiceAddPage = () => {

  const [picker, setPicker] = useState(new Date());

  return (

    <div>

      <Card2 title="Profile">

        <InvoiceAddPage2/>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
          <button style={{backgroundColor:"#4880FF",width:"269px",height:"44px",borderRadius:"10px",fontWeight:"700",fontSize:"20px",color:"white"}}>Update</button>
        </div>

      </Card2>

    </div>

  );

};

export default InvoiceAddPage;

