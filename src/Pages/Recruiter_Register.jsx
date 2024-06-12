import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Recruiter_Register = () => {
  return (
    <div className="w-full h-screen bg-[#000236] overflow-y-hidden">
      <Header />
      <h1 className="text-center font-semibold text-xl sm:text-4xl mt-5 text-[#9D88F2]">
        Register As Recruiter
      </h1>

      <div className="flex justify-center h-screen">
        <div className="bg-[#d9d9d9] rounded-[15px] w-[60%] sm:w-[55%] h-[40%]  sm:h-[70%] mt-5">
          <form className="flex flex-col items-center gap-5 align-center justify-center mt-6">
            <div className="flex gap-4">
              <label
                className=" text-md sm:text-2xl text-slate-600 font-semibold"
                htmlFor=""
              >
                Username :
              </label>{" "}
              <input
                type="text"
                placeholder="Enter username"
                className=" w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>

            <div className="flex gap-12">
              <label
                className=" text-md sm:text-2xl text-slate-600 font-semibold"
                htmlFor=""
              >
                Email:
              </label>{" "}
              <input
                type="email"
                placeholder="Enter Email"
                className=" w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>
            <div className="flex gap-4">
              <label
                className=" text-md sm:text-2xl text-slate-600 font-semibold"
                htmlFor=""
              >
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className=" w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>
            <div className="flex gap-2">
              <label
                className=" text-sm sm:text-2xl text-slate-600 font-semibold whitespace-nowrap"
                htmlFor=""
              >
                Organization Name:
              </label>
              <input
                type="text"
                placeholder={`Enter Organization Name`}
                className=" w-28 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>
            <button className=" px-10 py-2 sm:py-3 rounded-lg text-md sm:text-xl font-semibold bg-[#214299] text-white">
              Submit
            </button>
            <p className=" font-semibold">
              Already have an account?{" "}
              <Link to={"/recruiter_login"}>
                <span className=" font-bold">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recruiter_Register;
