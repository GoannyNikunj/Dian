import React, { useEffect, useState } from "react";

import { REACT_APP_BASE_URL } from "../../../index";

const _id = localStorage.getItem("_id");
const token = localStorage.getItem("token");

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InvoiceAddPage = () => {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [Pincode, setPincode] = useState("");
  const [PersonName, setPersonName] = useState("");
  const [City, setCity] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PanNumber, setPanNumber] = useState("");
  const [GSTNumber, setGSTNumber] = useState("");
  const [WhatsappBusinessApiNumber, setWhatsappBusinessApiNumber] = useState("");
  const [FacebookManagerId, setFacebookManagerId] = useState("");
  const [AccountHolderName, setAccountHolderName] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const [IFSCcode, setIFSCcode] = useState("");
  const [BankPincode, setBankPincode] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${REACT_APP_BASE_URL}/api/restaurants/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setEmail(data.data.email);
        setUserName(data.data.userName);
        setBusinessName(data.data.businessName);
        setPersonName(data.data.personalName);
        setPincode(data.data.pinCode);
        setCity(data.data.city);
        setPhoneNumber(data.data.phone);
        setPanNumber(data.data.panNumber);
        setGSTNumber(data.data.gstNumber);
        setWhatsappBusinessApiNumber(data.data.wpBusinessAPINumber);
        setFacebookManagerId(data.data.facebookManagerId);
        setAccountHolderName(data.data.bankDetails.holderName);
        setAccountNumber(data.data.bankDetails.accountNumber);
        setIFSCcode(data.data.bankDetails.ifscCode);
        setBankPincode(data.data.bankDetails.pinCode);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  InvoiceAddPage.handleApiCall = () => {

    const requestData = {
      businessName: BusinessName,
      personalName: PersonName,
      email: Email,
      phone: PhoneNumber,
      pinCode: Pincode,
      city: City,
      panNumber: PanNumber,
      gstNumber: GSTNumber,
      wpBusinessAPINumber: WhatsappBusinessApiNumber,
      facebookManagerId: FacebookManagerId,
      bankDetails: {
        holderName: AccountHolderName,
        accountNumber: AccountNumber,
        ifscCode: IFSCcode,
        pinCode: BankPincode,
      },
    };

    const toastObj = {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }

    fetch(`${REACT_APP_BASE_URL}/api/restaurants/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((responseData) => {

        if (responseData.code == 200) {
          toast.success("Update successfully", toastObj);
        } else {
          toast.error(`${responseData.message}`, toastObj)
        }

      })
      .catch((error) => {
        console.error("API call error:", error);
      });

  };

  return (
    <>
      <div class="outer-parent" style={{ position: "relative" }}>
        <div
          class="upper-sub-div"
          style={{ width: "100%", marginBottom: "40px" }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "white",
              height: "44px",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#19CCB7",
                position: "absolute",
                left: "0px",
                clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
              }}
            >
              <img
                src="/src/assets/images/icon/About.svg"
                class="placeholder-image"
                alt="Placeholder Image"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "calc(50% - 12px)",
                  height: "20px",
                  width: "20px",
                  marginRight: "0px",
                }}
              />
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                style={{
                  position: "absolute",
                  left: "44px",
                  top: "calc(50% - 14px)",
                  height: "100%",
                  width: "calc(100% - 44px)",
                  marginRight: "0px",
                  backgroundColor: "transparent",
                  fontSize: "20px",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                About
              </textarea>
            </div>
            <div class="flex justify-end p-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1066 7.98098L11.9281 6.80246L4.16667 14.5639V15.7424H5.34518L13.1066 7.98098ZM14.2851 6.80246L15.4636 5.62395L14.2851 4.44544L13.1066 5.62395L14.2851 6.80246ZM6.03553 17.4091H2.5V13.8736L13.6958 2.67768C14.0213 2.35223 14.5489 2.35223 14.8743 2.67768L17.2314 5.03469C17.5568 5.36013 17.5568 5.88777 17.2314 6.21321L6.03553 17.4091Z" fill="#949FAC" />
              </svg>
            </div>
          </div>
        </div>

        <div class="lower-sub-div" style={{ width: "100%" }}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="fromGroup">
              <label className="block capitalize form-label">
                Business Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={BusinessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                <div className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse"></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">Person Name</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={PersonName}
                  onChange={(e) => setPersonName(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">Email Id</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">Pincode</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={Pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">City</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">Pan Number</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={PanNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">GST Number</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={GSTNumber}
                  onChange={(e) => setGSTNumber(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">
                Whatsapp Business Api Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={WhatsappBusinessApiNumber}
                  onChange={(e) => setWhatsappBusinessApiNumber(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">
                Facebook Manager Id
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={FacebookManagerId}
                  onChange={(e) => setFacebookManagerId(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="upper-sub-div"
          style={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "white",
              height: "44px",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#FF4995",
                position: "absolute",
                left: "0px",
                clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
              }}
            >
              <img
                src="/src/assets/images/icon/BankDetails.svg"
                class="placeholder-image"
                alt="Placeholder Image"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "calc(50% - 12px)",
                  height: "20px",
                  width: "20px",
                  marginRight: "0px",
                }}
              />
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                style={{
                  position: "absolute",
                  left: "44px",
                  top: "calc(50% - 14px)",
                  height: "100%",
                  width: "calc(100% - 44px)",
                  marginRight: "0px",
                  backgroundColor: "transparent",
                  fontSize: "20px",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Bank Details
              </textarea>
            </div>
          </div>
        </div>

        <div class="lower-sub-div" style={{ width: "100%" }}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="fromGroup">
              <label className="block capitalize form-label">
                Account Holder Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={AccountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">
                Account Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={AccountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">IFSC code</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={IFSCcode}
                  onChange={(e) => setIFSCcode(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>

            <div className="fromGroup">
              <label className="block capitalize form-label">Pincode</label>
              <div className="relative">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder=""
                  value={BankPincode}
                  onChange={(e) => setBankPincode(e.target.value)}
                />
                <div
                  className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceAddPage;
