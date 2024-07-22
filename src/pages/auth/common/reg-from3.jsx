import React, { useState, useEffect } from "react";
import Checkbox from "@/components/ui/Checkbox";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { REACT_APP_BASE_URL, REACT_APP_BASE_URL2 } from "../../../../index";

const RegForm = () => {
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  // useEffect(() => {
  // const token = localStorage.getItem("token");
  // if (token) {
  // history.push("/authenticated-route");
  // }
  // }, []);

  const toastObj = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responses = await fetch("https://dealdianbackend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responsesData = await responses.json();

      if (responsesData.status == "404") {
        const response = await fetch(
          `${REACT_APP_BASE_URL}/api/restaurants/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const responseData = await response.json();

        if (responseData.code == 200) {
          setFormData({
            userName: "",
            password: "",
          });

          toast.success("SignIn successfully", toastObj);

          localStorage.setItem("token", responseData.data.token);
          localStorage.setItem("_id", responseData.data._id);

          window.location.href = `${REACT_APP_BASE_URL2}/Homepage`;
        } else {
          toast.error(`${responseData.message}`, toastObj);
        }
      } else {
        if (responsesData.message == "Wrong PassWord") {
          toast.error(`Invalid password`, toastObj);
        } else {
          window.location.href = `${REACT_APP_BASE_URL2}/Admin01`;
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form className="space-y-5 " onSubmit={handleSubmit}>
        <div className="fromGroup">
          <label className="block capitalize form-label">
            Email Address / Whatsapp
          </label>
          <div className="relative ">
            <input
              type="text"
              className="form-control py-2 h-[48px]"
              placeholder="Email@example.com"
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

        <Checkbox
          label="Remember Me"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <button className="btn btn-primary block w-full text-center">
          Log-in
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default RegForm;
