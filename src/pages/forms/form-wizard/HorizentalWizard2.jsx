import React, { useState, useEffect } from "react";
import Textinput from "@/components/ui/Textinput2";
import InputGroup from "@/components/ui/InputGroup";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const steps = [
  {
    id: 1,
    title: "Account Details",
  },
  {
    id: 2,
    title: "Personal info-500",
  },
  {
    id: 3,
    title: "Address",
  },
  {
    id: 4,
    title: "Social Links",
  },
];

let stepSchema = yup.object().shape({
  username: yup.string().required(" User name is required"),
  fullname: yup.string().required("Full name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{12}$/, "Phone number is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmpass: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

let personalSchema = yup.object().shape({
  fname: yup.string().required(" First name is required"),
  lname: yup.string().required(" Last name is required"),
});
let addressSchema = yup.object().shape({
  address: yup.string().required(" Address is required"),
});
const url =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

let socialSchema = yup.object().shape({
  fburl: yup
    .string()
    .required("Facebook url is required")
    .matches(url, "Facebook url is not valid"),
});
const FormWizard = () => {
  const [stepNumber, setStepNumber] = useState(0);

  // find current step schema
  let currentStepSchema;
  switch (stepNumber) {
    case 0:
      currentStepSchema = stepSchema;
      break;
    case 1:
      currentStepSchema = personalSchema;
      break;
    case 2:
      currentStepSchema = addressSchema;
      break;
    case 3:
      currentStepSchema = socialSchema;
      break;
    default:
      currentStepSchema = stepSchema;
  }
  useEffect(() => {
    //console.log("step number changed");
  }, [stepNumber]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(currentStepSchema),
    // keep watch on all fields
    mode: "all",
  });

  const onSubmit = (data) => {
    // next step until last step . if last step then submit form
    let totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;
    if (isLastStep) {
      console.log(data);
    } else {
      setStepNumber(stepNumber + 1);
    }
  };

  const handlePrev = () => {
    setStepNumber(stepNumber - 1);
  };

  return (
    <div>
        <div>
          <div className="conten-box ">
            <form onSubmit={handleSubmit(onSubmit)}>

{stepNumber === 0 && (
                <div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1" style={{gap:"10px"}}>
                  {/* <div class="input-container" style={{position:"relative"}}>
                  <Textinput
                      type="text"
                      placeholder="Type your User Name"
                      name="username"
                      error={errors.username}
                      register={register}
                      />
    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"24px",width:"24px",marginRight:"0px"}} />
  </div> */}
  <div style={{ position: "relative", backgroundColor: "white", border: "1px solid #9D3AFF", borderRadius: "5px" }}>
  <div style={{ width: "75%", height: "100%", backgroundColor: "#9D3AFF", position: "absolute", left: "0px", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)", borderRadius: "5px 0px 0px 5px" }}>
  <img src="/src/assets/images/icon/Ruppes.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"24px",width:"24px",marginRight:"0px"}} />
  <textarea id="w3review" name="w3review" rows="4" cols="50" style={{position:"absolute",left:"44px",top:"calc(50% - 12px)",height:"19px",width:"calc(100% - 44px)",marginRight:"0px",backgroundColor:"transparent",fontSize:"16px",color:"white"}}>
  Transaction History
  </textarea>
  </div>
</div>

  <div class="input-container" style={{position:"relative"}}>
                  <Textinput
                      type="text"
                      placeholder="Track Expenses"
                      name="username"
                      error={errors.username}
                      register={register}
                      />
    <img src="src/assets/images/icon/949FACColorDownArrow.svg" class="placeholder-image" alt="Placeholder Image" style={{position:"absolute",left:"10px",top:"calc(50% - 12px)",height:"24px",width:"24px",marginRight:"0px"}} />
  </div>
                  </div>
                </div>
              )}

              {stepNumber === 1 && (
                <div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="md:col-span-2 col-span-1">
                      <h4 className="text-base text-slate-800 dark:text-slate-300 mb-6">
                        Enter Your Personal info-500
                      </h4>
                    </div>
                    <Textinput
                      label="First name"
                      type="text"
                      placeholder="First name"
                      name="fname"
                      error={errors.fname}
                      register={register}
                    />
                    <Textinput
                      label="Last name"
                      type="text"
                      placeholder="Last name"
                      name="lname"
                      error={errors.lname}
                      register={register}
                    />
                  </div>
                </div>
              )}
              {stepNumber === 2 && (
                <div>
                  <div className="grid grid-cols-1 gap-5">
                    <div className="">
                      <h4 className="text-base text-slate-800 dark:text-slate-300 mb-6">
                        Enter Your Address
                      </h4>
                    </div>
                    <Textarea
                      label="Address"
                      type="text"
                      placeholder="Write Address"
                      name="address"
                      error={errors.address}
                      register={register}
                    />
                  </div>
                </div>
              )}
              {stepNumber === 3 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-base text-slate-800 dark:text-slate-300 mb-6">
                        Enter Your Address
                      </h4>
                    </div>
                    <Textinput
                      label="Facebook"
                      type="text"
                      placeholder="https://www.facebook.com/profile"
                      name="fburl"
                      error={errors.fburl}
                      register={register}
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
    </div>
  );
};

export default FormWizard;
