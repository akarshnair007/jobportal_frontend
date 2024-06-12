import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Login_Register = () => {
  return (
    <div className="w-full h-screen overflow-y-hidden">
      <Header />
      <main className="w-full h-screen flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-20 sm:gap-0 flex-wrap bg-[#000236] p-10">
        <div className="relative w-[90%] h-[29%] bg-slate-300 sm:h-[90%] sm:w-[45%] rounded-2xl">
          <div className="absolute top-[10%] left-[20%]">
            <img src="/job_seeker.png" className="sm:w-[70%] w-[71%]" alt="" />
          </div>
          <div className="absolute top-[83%] sm:top-[80%] left-[18%] sm:left-[29%]">
            <Link to={"/job_seeker_register"}>
              {" "}
              <button className="bg-[#204299] text-white text-sm sm:text-lg px-2 py-2 rounded-md w-full sm:w-auto">
                Login/Register as Job Seeker
              </button>
            </Link>{" "}
          </div>
        </div>
        <div className="relative w-[90%] h-[30%] bg-slate-300 sm:h-[90%] sm:w-[45%] rounded-2xl ">
          <div className="absolute top-[15%] left-[20%]">
            <img src="/job_recruiter.png" width={"80%"} alt="" />
          </div>
          <div className="absolute top-[82%] sm:top-[79%] left-[20%] sm:left-[30%]">
            <Link to={"/recruiter_register"}>
              <button className="bg-[#204299] text-white text-sm sm:text-lg px-2 py-2 rounded-md w-full sm:w-auto">
                Login/Register as Recruiter
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login_Register;
