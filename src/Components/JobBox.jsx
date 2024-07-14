import React, { useEffect, useState, useCallback } from "react";
import { ApplyJobAPI, GetAppliedJobsAPI } from "../Services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const JobBox = ({ user, jobs, fetchJobs }) => {
  const [appliedJobs, setAppliedJobs] = useState(new Set());

  // Fetch applied jobs for the current user
  const fetchAppliedJobs = useCallback(async () => {
    if (user && user._id) {
      try {
        const result = await GetAppliedJobsAPI(user._id);
        console.log(`Jobseeker: ${result}`);
        setAppliedJobs(new Set(result.data));
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      }
    }
  }, [user]);

  // Fetch applied jobs on component mount and when user changes
  useEffect(() => {
    fetchAppliedJobs();
  }, [fetchAppliedJobs, user]);

  // Handler for applying to a job
  const ApplyHandler = async (e, jobTitle, organizationName) => {
    e.preventDefault();
    if (!user.resume) {
      toast.warning("Please upload your resume before applying for a job.");
      return;
    }

    // Check if already applied
    if (appliedJobs.has(jobTitle)) {
      toast.warning("You have already applied to this job.");
      return;
    }

    const userId = user._id;
    const result = await ApplyJobAPI({ userId, jobTitle, organizationName });

    if (result.status === 200) {
      toast.success("You have applied to this post");
      setAppliedJobs(new Set([...appliedJobs, jobTitle]));
    } else if (result.status === 403) {
      toast.warning("You are not allowed to apply for this job");
    } else {
      toast.error("Something error occurred");
    }
  };

  return (
    <div className="w-[94%] flex flex-col">
      <div className="flex justify-end mb-4">
        <button
          className="bg-slate-500 text-white py-2 px-4 rounded hover:bg-slate-600"
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
        jobs.map((item) => (
          <div
            key={item._id}
            className="relative jobs sm:mx-10 mx-2 rounded-2xl my-5 w-full bg-[#d9d9d9] flex items-center justify-around p-4"
          >
            <div className="px-4 py-4 text-center">
              <h1 className="text-2xl font-extrabold text-slate-600 capitalize mb-4">
                {item.organizationName}
              </h1>
              <h2 className="text-xl font-extrabold text-slate-800 capitalize mb-2">
                {item.title}
              </h2>
              <h3 className="text-lg font-semibold text-slate-800 capitalize mb-2 break-words">
                {item.description}
              </h3>
              <h6 className="text-base font-bold uppercase underline text-slate-800 break-words">
                For {item.experience}
              </h6>
            </div>
            {appliedJobs.has(item.title) ? (
              <button
                className="px-5 py-2 bg-slate-800 rounded-3xl text-white"
                disabled
              >
                Applied
              </button>
            ) : (
              <button
                className="px-5 py-2 bg-slate-500 rounded-3xl text-white"
                onClick={(e) =>
                  ApplyHandler(e, item.title, item.organizationName)
                }
              >
                Apply
              </button>
            )}
          </div>
        ))
      ) : (
        <div className="relative jobs sm:mx-10 mx-2 rounded-2xl my-5 w-full bg-[#d9d9d9] flex items-center justify-around p-4">
          <p className="text-center text-2xl font-bold text-slate-800">
            No data found
          </p>
        </div>
      )}
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </div>
  );
};

export default JobBox;
