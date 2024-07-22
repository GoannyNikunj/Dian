import React, { useEffect, useState } from "react";

import TotalTable from "../utility/TotalTable6"

import WhatsappMarketingCompaignSubMenu1 from "./WhatsappMarketingCompaignSubMenu1"
import WhatsappMarketingCompaignSubMenu2 from "./WhatsappMarketingCompaignSubMenu2"
import WhatsappMarketingCompaignSubMenu3 from "./WhatsappMarketingCompaignSubMenu3"
import axios from "axios";
import { REACT_APP_BASE_URL, REACT_APP_BASE_URL3 } from "../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

const rows = [
  {
    Description: "Marketing Fee for estimated results",
    Amount: "₹470"
  },
  {
    Description: "GST 18%",
    Amount: "₹30"
  },
  {
    Description: "Total",
    Amount: "₹500"
  },
  {
    Description: "Wallet Balance",
    Amount: "₹2000"
  },
  {
    Description: "",
    Amount: "-₹1,500"
  }
];

function App() {

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);

  const [dataFromChild, setDataFromChild] = useState(10);
  const [dataFromChild2, setDataFromChild2] = useState({});
  
  const toggleDiv1 = () => {
    setShowDiv1(!showDiv1);
    // Close other divs if they are open
    setShowDiv2(false);
    setShowDiv3(false);
    setShowDiv4(false);
  };

  const toggleDiv2 = () => {
    setShowDiv2(!showDiv2);
    // Close other divs if they are open
    setShowDiv1(false);
    setShowDiv3(false);
    setShowDiv4(false);
  };

  const toggleDiv3 = () => {
    setShowDiv3(!showDiv3);
    // Close other divs if they are open
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv4(false);
  };

  const toggleDiv4 = () => {
    setShowDiv4(!showDiv4);
    // Close other divs if they are open
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(false);
  };

  const getData = () => {

    axios.get(`${REACT_APP_BASE_URL}/api/admin/restaurants/getAllRestaurants`)

      .then((response) => {

        for (var i = 0; i < response.data.data.length; i++) {

          if (response.data.data[i].phone != null) {

            let dateOfBirthValue;
            if ("dateOfBirth" in dataFromChild2) {
              dateOfBirthValue=dataFromChild2.dateOfBirth;
            } else {
              dateOfBirthValue=null;
            }

            let genderValue;
            if ("gender" in dataFromChild2) {

              if(dataFromChild2.gender == "Male"){
                genderValue=1;
              }else{
                genderValue=2;
              }
              
            } else {
              genderValue=null;
            }

            let relationshipStatusValue;
            if ("relationShipStatus" in dataFromChild2) {
              relationshipStatusValue=dataFromChild2.relationShipStatus;
            } else {
              relationshipStatusValue=null;
            }

            let ageGroupValue;
            if ("ageGroup" in dataFromChild2) {
              ageGroupValue=dataFromChild2.ageGroup;
            } else {
              ageGroupValue=null;
            }

            let proffesionValue;
            if ("profession" in dataFromChild2) {
              proffesionValue=dataFromChild2.profession;
            } else {
              proffesionValue=null;
            }

            fetch(`${REACT_APP_BASE_URL}api/restaurants/whatsapp/sendMessage`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                // phone: response.data.data[i].phone,
                templateID:TemplateId.toString(),
                phone: 9106850877,
                image: "https://i.ibb.co/SQfj3yk/DP-Business-Wap.jpg",
                // image: selectedTemplateImageValue,
                description: selectedTemplateTextValue,
                dateofbirth: dateOfBirthValue,
                gender:genderValue,
                relationshipstatus:relationshipStatusValue,
                agegroup:ageGroupValue,
                proffesion:proffesionValue,
                distance:dataFromChild
              })
            })
              .then(response => response.text())
              .then(data => {
                console.log("Success:", data);
              })
              .catch(error => {
                console.error("Error:", error);
              });

          }

        }

      })
      .catch((error) => {

        console.log(error);

      })

  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  const handleDataFromChild2 = (data) => {
    setDataFromChild2(data);
  };

  const [yearData, setYearData] = useState(2024);
  const [monthData, setMonthData] = useState(10);
  const [dateData, setDateData] = useState(11);
  const [hourData, setHourData] = useState(12);
  const [minuteData, setMinuteData] = useState(30);
  const [dateFormatData, setDateFormatData] = useState('PM');
 
  const handleChildData1 = (data) => {
    setYearData(data);  
  };

  const handleChildData2 = (data) => {
    setMonthData(data);  
  };

  const handleChildData3 = (data) => {
    setDateData(data);  
  };

  const handleChildData4 = (data) => {
    setHourData(data);  
  };

  const handleChildData5 = (data) => {
    setMinuteData(data);  
  };

  const handleChildData6 = (data) => {
    setDateFormatData(data);  
  };

  const [TemplateValue, setTemplateValue] = useState([]);
  
  const [selectedTemplateTextValue, setSelectedTemplateTextValue] = useState('');
  const [selectedTemplateImageValue, setSelectedTemplateImageValue] = useState('');
  const [TemplateId, setTemplateId] = useState('');

  useEffect( async () => {
    
    const response = await fetch(
      `${REACT_APP_BASE_URL}api/restaurants/whatsapp/getTemplates`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      }
    );

    const responseata = await response.json();
    setTemplateValue(responseata.data);

  }, []);

  const handleChildData7 = (SelectedTemplate) => {

    setSelectedTemplateTextValue(SelectedTemplate.description);
    setSelectedTemplateImageValue(SelectedTemplate.image);
    setTemplateId(SelectedTemplate.id);

    console.log(TemplateId,"SelectedTemplate");

  };

  return (
    <div>
      <div>
        <div>
          <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6" style={{ fontSize: "24px", fontWeight: "700" }}>
            Whatsapp Marketing
          </h4><br />
          <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6" style={{ fontSize: "18px", fontWeight: "400" }}>
            Lorem ipsum dolor sit amet consectetur.
          </h4>
        </div>
      </div>

      <div style={{ display: 'flex', overflowX: "auto", marginBottom: "30px" }}>
        <div style={{ marginRight: '70px', whiteSpace: 'nowrap', fontWeight: 600, fontSize: '20px' }}>WhatsApp Group</div>
        <div style={{ marginRight: '5px', whiteSpace: 'nowrap', fontWeight: 700, fontSize: '20px' }}>WhatsApp Bulk Messages</div>
      </div>

      <div style={{ position: "relative", backgroundColor: "white", height: "80px", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>
        <div style={{ width: "50%", height: "100%", backgroundColor: "#19CCB7", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}>
          {/* <img src="/src/assets/images/icon/Circle2.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"25px",top:"25px",height:"30px",width:"30px",marginRight:"0px"}} /> */}
          <textarea id="w3review" name="w3review" rows="4" cols="50" style={{ position: "absolute", left: "85px", top: "calc(50% - 14px)", height: "100%", width: "calc(100% - 44px)", marginRight: "0px", backgroundColor: "transparent", fontSize: "20px", color: "white", fontWeight: "700" }}>
            Template
          </textarea>
          <div style={{ fontWeight: "700", width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'black', marginTop: "25px", marginLeft: "25px" }}>
            1
          </div>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: "#19CCB7", position: "absolute", right: "0px", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <img onClick={toggleDiv1} src="/src/assets/images/icon/WhatsappDownArrow.svg" class="placeholder-image" alt="Placeholder Image" style={{ position: "absolute", right: "10px", top: "calc(50% - 12px)", height: "20px", width: "20px", marginRight: "0px" }} />
        </div>
      </div>

      {showDiv1 && (

        <div style={{ position: "relative", backgroundColor: "white", height: "100%", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>
          <WhatsappMarketingCompaignSubMenu1 onDataFromChild={handleChildData7} onDataFromChild2={TemplateValue}/>
        </div>

      )}

      <div style={{ position: "relative", backgroundColor: "white", height: "80px", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>
        <div style={{ width: "50%", height: "100%", backgroundColor: "#FF4995", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}>
          {/* <img src="/src/assets/images/icon/Circle2.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"25px",top:"25px",height:"30px",width:"30px",marginRight:"0px"}} /> */}
          <textarea id="w3review" name="w3review" rows="4" cols="50" style={{ position: "absolute", left: "85px", top: "calc(50% - 14px)", height: "100%", width: "calc(100% - 44px)", marginRight: "0px", backgroundColor: "transparent", fontSize: "20px", color: "white", fontWeight: "700" }}>
            Select the Audience
          </textarea>
          <div style={{ fontWeight: "700", width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'black', marginTop: "25px", marginLeft: "25px" }}>
            2
          </div>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: "#FF4995", position: "absolute", right: "0px", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <img onClick={toggleDiv2} src="/src/assets/images/icon/WhatsappDownArrow.svg" class="placeholder-image" alt="Placeholder Image" style={{ position: "absolute", right: "10px", top: "calc(50% - 12px)", height: "20px", width: "20px", marginRight: "0px" }} />
        </div>
      </div>

      {showDiv2 && (
        <div style={{ position: "relative", backgroundColor: "white", height: "100%", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>
          <WhatsappMarketingCompaignSubMenu2 onDataFromChild={handleDataFromChild} onDataFromChild2={handleDataFromChild2} />
        </div>
      )}

      <div style={{ position: "relative", backgroundColor: "white", height: "80px", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>
        <div style={{ width: "50%", height: "100%", backgroundColor: "#9D3AFF", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}>
          {/* <img src="/src/assets/images/icon/Circle2.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"25px",top:"25px",height:"30px",width:"30px",marginRight:"0px"}} /> */}
          <textarea id="w3review" name="w3review" rows="4" cols="50" style={{ position: "absolute", left: "85px", top: "calc(50% - 14px)", height: "100%", width: "calc(100% - 44px)", marginRight: "0px", backgroundColor: "transparent", fontSize: "20px", color: "white", fontWeight: "700" }}>
            When do you want to send the message
          </textarea>
          <div style={{ fontWeight: "700", width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'black', marginTop: "25px", marginLeft: "25px" }}>
            3
          </div>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: "#9D3AFF", position: "absolute", right: "0px", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <img onClick={toggleDiv3} src="/src/assets/images/icon/WhatsappDownArrow.svg" class="placeholder-image" alt="Placeholder Image" style={{ position: "absolute", right: "10px", top: "calc(50% - 12px)", height: "20px", width: "20px", marginRight: "0px" }} />
        </div>
      </div>

      {showDiv3 && (
        <div style={{ position: "relative", backgroundColor: "white", height: "100%", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>

          <WhatsappMarketingCompaignSubMenu3 onData1={handleChildData1} onData2={handleChildData2}
          onData3={handleChildData3} onData4={handleChildData4} onData5={handleChildData5} onData6={handleChildData6}/>

        </div>
      )}

      <div style={{ position: "relative", backgroundColor: "white", height: "80px", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>
        <div style={{ width: "50%", height: "100%", backgroundColor: "#EBA900", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}>
          {/* <img src="/src/assets/images/icon/Circle2.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"25px",top:"25px",height:"30px",width:"30px",marginRight:"0px"}} /> */}
          <textarea id="w3review" name="w3review" rows="4" cols="50" style={{ position: "absolute", left: "85px", top: "calc(50% - 14px)", height: "100%", width: "calc(100% - 44px)", marginRight: "0px", backgroundColor: "transparent", fontSize: "20px", color: "white", fontWeight: "700" }}>
            Invoice
          </textarea>
          <div style={{ fontWeight: "700", width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', color: 'black', marginTop: "25px", marginLeft: "25px" }}>
            4
          </div>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: "#EBA900", position: "absolute", right: "0px", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <img onClick={toggleDiv4} src="/src/assets/images/icon/WhatsappDownArrow.svg" class="placeholder-image" alt="Placeholder Image" style={{ position: "absolute", right: "10px", top: "calc(50% - 12px)", height: "20px", width: "20px", marginRight: "0px" }} />
        </div>
      </div>

      {showDiv4 && (
        <div style={{ position: "relative", backgroundColor: "white", height: "100%", left: "10px", marginBottom: "10px", borderRadius: "10px" }}>

          <TotalTable />

        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
        <button style={{ backgroundColor: "#4880FF", width: "269px", height: "44px", borderRadius: "5px", fontWeight: "700", fontSize: "14px", color: "white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={getData}>
          <img src="/src/assets/images/icon/SendButton.svg" alt="Send Message" style={{ marginRight: '15px' }} /> Send Message
        </button>
      </div>

    </div>
  );
}

export default App;

// import React from 'react';

// class SendMessage extends React.Component {
//   handleClick = () => {
//     const proxyUrl = "http://localhost:4500/proxy";

//     fetch(proxyUrl, {
//       method: 'POST', // Set the request method to POST
//       headers: {
//         'Content-Type': 'application/json' // Set the content type to JSON if necessary
//       },
//       body: JSON.stringify({ // If you need to send data with the request, stringify it here
//         key1: 'value1'
//       })
//     })
//       .then(response => response.text())
//       .then(data => {
//         console.log("Success:", data);
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   };

//   render() {
//     return (
//       <button onClick={this.handleClick}>Send Message</button>
//     );
//   }
// }

// export default SendMessage; 


