import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { REACT_APP_BASE_URL } from '../../../../index';

const RegForm = () => {
  
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isChecked, setIsChecked] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if(formData.password == formData.confirmPassword && formData.password !== "" && formData.password !== ""){

        if(isChecked){
          
          const response = await fetch(
            `${REACT_APP_BASE_URL}/api/restaurants/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
          const responseData = await response.json();

          if(responseData.code == 200){
            setFormData({
              userName: "",
              email: "", 
              password: "",
              confirmPassword: "",
            });
            toast.success("Signup successfully",toastObj);
          }else{
            toast.error(`${responseData.message}`,toastObj)
          }

        }else{
          toast.error(`Please Accept Terms And Condition`,toastObj)
        }

      }else{
        toast.error(`Password And confirm Must Be Same And Nor Blank`,toastObj)
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <>
    
    <form className="space-y-5 " onSubmit={handleSubmit}>

      <div className="fromGroup">
        <label className="block capitalize form-label">Username</label>
        <div className="relative ">
          <input
            type="text"
            className="form-control py-2 h-[48px]"
            placeholder="Username"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          />
          <div
            className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
          space-x-1 rtl:space-x-reverse"
          ></div>
        </div>
      </div>

      <div className="fromGroup">
        <label className="block capitalize form-label">Email Address / Whatsapp</label>
        <div className="relative ">
          <input
            type="text"
            className="form-control py-2 h-[48px]"
            placeholder="Email@example.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div
            className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
          ></div>
        </div>
      </div>

      <div className="fromGroup">
        <label className="block capitalize form-label">password</label>
        <div className="relative ">
          <input
            type="text"
            className="form-control py-2 h-[48px]"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div
            className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
          ></div>
        </div>
      </div>

      <div className="fromGroup">
        <label className="block capitalize form-label">Confirm Passwrod</label>
        <div className="relative ">
          <input
            type="text"
            className="form-control py-2 h-[48px]"
            placeholder="Confirm Passwrod"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <div
            className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  
    space-x-1 rtl:space-x-reverse"
          ></div>
        </div>
      </div>

      <label className="flex items-center cursor-pointer">
        <input type="checkbox" onChange={handleCheckboxChange}  checked={isChecked} style={{marginRight:"0.75rem"}}/>
        <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
          I accept the Terms of service and Privacy policy
          </span>
      </label>

      <button
        type="submit"
        className="btn btn-primary block w-full text-center"
      >
        Sign Up
      </button>
    </form>
    <ToastContainer/>

    </>

  );
};

export default RegForm;
