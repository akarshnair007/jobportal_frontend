import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { jobPostAPI } from "../Services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobSeekerApproval from "../Components/JobSeekerApproval";
import JobPostApplication from "./JobPostApplication";

const Recruiter_Page = () => {
  const [recruiterDetails, setRecruiterDetails] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("recruiter")) {
      const data = sessionStorage.getItem("recruiter");
      setRecruiterDetails(JSON.parse(data));
    }
  }, []);

  return (
    <div className="w-full h-full bg-[#000236]">
      <Header />

      {/* Form Section */}
      <div className="w-full h-auto flex flex-wrap justify-between sm:px-16 p-2 py-10">
        <div className="left">
          <img
            src="/img_7.png"
            className=" w-[80%] sm:w-[80%] h-[90%] sm:h-[80%]"
            alt=""
          />
        </div>
        <div className="relative w-full sm:w-[50%] sm:h-[50%] ">
          <div className="relative w-[98%] sm:w-[545px] sm:h-[449px] bg-[#d9d9d9] rounded-[21px]">
            <div className="heading text-2xl font-bold text-black flex justify-center pt-4 ">
              <h1 className="hover:underline">Job Post Application</h1>
            </div>
            <JobPostApplication token={token} jobPostAPI={jobPostAPI} />
          </div>
        </div>
      </div>
      <img src="/Vector_1.png" className="w-full " alt="" />
      <img src="/Vector_2.png" className="w-full " alt="" />

      {/* Job Seeker Approval */}
      {recruiterDetails.organizationName && recruiterDetails.email && (
        <JobSeekerApproval
          organizationName={recruiterDetails.organizationName}
          email={recruiterDetails.email}
        />
      )}

      {/* Conditionally render ToastContainer */}
      {recruiterDetails.organizationName && recruiterDetails.email && (
        <ToastContainer theme="dark" autoClose={2000} position="top-right" />
      )}

      <Footer />
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </div>
  );
};

export default Recruiter_Page;
