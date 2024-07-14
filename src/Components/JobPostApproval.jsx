import React, { useEffect, useState } from "react";
import {
  AcceptJobPostsAPI,
  RejectJobPostsAPI,
  getJobPostAPI,
} from "../Services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const JobPostApproval = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const result = await getJobPostAPI();
      if (result.data) {
        setJobs(result.data);
      } else {
        console.error("Failed to fetch jobs, no data returned");
      }
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []); // Only run once when the component mounts

  const AcceptHandler = async (jobPostId) => {
    try {
      const result = await AcceptJobPostsAPI({ jobPostId });
      if (result.status === 200) {
        toast.success("Job Post has been accepted");
        fetchJobs(); // Refresh the list after accepting
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const RejectHandler = async (jobPostId) => {
    try {
      const result = await RejectJobPostsAPI({ jobPostId });
      if (result.status === 200) {
        toast.success("Job Post has been rejected");
        fetchJobs(); // Refresh the list after rejecting
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-[80%] sm:w-[70%] rounded-3xl bg-[#A3A3A3] my-5 p-5 mx-auto">
      <div className="flex justify-end mb-4">
        <button
          className="bg-white text-slate-800 font-bold py-2 px-4 rounded hover:bg-slate-600 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            fetchJobs();
          }}
        >
          Refresh Jobs{" "}
          <FontAwesomeIcon icon={faArrowsRotate} className="ms-1" />
        </button>
      </div>
      {jobs.length > 0 ? (
        jobs.map((item, index) => (
          <div key={index} className="mb-8 bg-[#B3B3B3] p-4 rounded-xl">
            <h1 className="text-xl font-extrabold text-slate-800 text-center mb-4">
              {item.title}
            </h1>
            <h1 className="text-lg font-semibold text-slate-800 text-center mb-4">
              {item.description}
            </h1>
            <h1 className="text-base font-bold uppercase underline text-slate-800 text-center mb-4">
              {item.experience}
            </h1>
            <div className="w-full flex justify-evenly mt-4">
              <button
                className="px-5 py-2 bg-white text-black text-xl rounded-3xl font-semibold"
                onClick={() => AcceptHandler(item._id)}
              >
                Accept
              </button>
              <button
                onClick={() => RejectHandler(item._id)}
                className="px-5 py-2 bg-black text-white text-xl rounded-3xl font-semibold"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-2xl text-slate-900 capitalize font-semibold">
          No Job Application is there to verify
        </p>
      )}
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </div>
  );
};

export default JobPostApproval;
