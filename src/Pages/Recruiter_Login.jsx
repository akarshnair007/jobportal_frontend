// src/Pages/Recruiter_Login.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { recruiteLoginAPI } from "../Services/AllApi";
import { AuthContext } from "../Context/AuthContext";

const Recruiter_Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;
    if (!email || !password) {
      toast.info("Please fill the form");
    } else {
      const result = await recruiteLoginAPI(userDetails);
      console.log(result);

      if (result.status === 200) {
        console.log(result);
        toast.success("Login Successful");
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem(
          "recruiter",
          JSON.stringify(result.data.existingUser)
        );
        login(result.data.token);
        setTimeout(() => {
          navigate("/recruiter_page");
        }, 3000);
      } else {
        toast.warning("Something went wrong");
      }
    }
  };

  return (
    <div className="w-full h-screen bg-[#000236] overflow-y-hidden">
      <Header />
      <h1 className="text-center font-semibold text-xl sm:text-4xl mt-5 text-[#9D88F2]">
        Login As Recruiter{" "}
      </h1>

      <div className="flex justify-center h-screen">
        <div className="bg-[#d9d9d9] rounded-[15px] w-[60%] sm:w-[55%] h-[30%]  sm:h-[60%] mt-5">
          <form className="flex flex-col items-center gap-6 align-center justify-center mt-10 sm:mt-16">
            <div className="flex gap-9">
              <label
                className=" text-md sm:text-2xl text-slate-600 font-semibold"
                htmlFor=""
              >
                Email:
              </label>{" "}
              <input
                type="email"
                placeholder="Enter Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
                className=" w-32 sm:w-80 sm:ms-3 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>
            <div className="flex gap-2">
              <label
                className=" text-md sm:text-2xl text-slate-600 font-semibold"
                htmlFor=""
              >
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
                className=" w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>
            <button
              className=" px-10 py-2 sm:py-3 rounded-lg text-md sm:text-xl font-semibold bg-[#214299] text-white mt-5"
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>
            <p className=" font-semibold">
              Don't have an account?{" "}
              <Link to={"/recruiter_register"}>
                <span className=" font-bold">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </div>
  );
};

export default Recruiter_Login;
