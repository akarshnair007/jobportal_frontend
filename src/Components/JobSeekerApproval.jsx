import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  JobSeekerAppliedPostsAPI,
  getAcceptedEmailAPI,
  getRejectedEmailAPI,
} from "../Services/AllApi";
import { serverUrl } from "../Services/Base_Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const JobSeekerApproval = ({ organizationName, email }) => {
  const [jobPostsData, setJobPostsData] = useState([]);

  const fetchUserPosts = async () => {
    const result = await JobSeekerAppliedPostsAPI({ organizationName });
    if (result.status === 200) {
      setJobPostsData(result.data);
    } else {
      console.log("error");
    }
  };

  const acceptHandler = async (
    e,
    jobSeekerName,
    jobSeekerEmail,
    jobTitle,
    postId
  ) => {
    e.preventDefault();
    console.log(postId);
    const result = await getAcceptedEmailAPI(
      jobSeekerName,
      jobSeekerEmail,
      jobTitle,
      organizationName,
      email,
      postId
    );
    if (result.status === 200) {
      toast.success(`The Accepted Email has been sent to ${jobSeekerName}`);
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />;

      fetchUserPosts();
    } else {
      toast.warning("Some error occurred");
    }
  };

  const rejectHandler = async (
    e,
    jobSeekerName,
    jobSeekerEmail,
    jobTitle,
    postId
  ) => {
    e.preventDefault();
    const result = await getRejectedEmailAPI(
      jobSeekerName,
      jobSeekerEmail,
      jobTitle,
      organizationName,
      email,
      postId
    );
    if (result.status === 200) {
      toast.success(`The Rejected Email has been sent to ${jobSeekerName}`);
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />;

      fetchUserPosts();
    } else {
      toast.warning("Some error occurred");
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, [organizationName]);

  return (
    <div className="w-[80%] sm:w-[70%] rounded-3xl bg-[#A3A3A3] my-5 p-5 mx-auto">
      <h1 className="text-center font-semibold text-2xl text-slate-700 underline my-3">
        Candidates Applications
      </h1>
      <div className="flex justify-end mb-4">
        <button
          className="bg-white text-slate-800 font-bold py-2 px-4 rounded hover:bg-slate-600 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            fetchUserPosts();
          }}
        >
          Refresh Applications
          <FontAwesomeIcon icon={faArrowsRotate} className="ms-1" />
        </button>
      </div>
      {jobPostsData.length > 0 ? (
        jobPostsData.map((item) => (
          <div className="mb-8 bg-[#B3B3B3] p-4 rounded-xl" key={item._id}>
            <h1 className="text-xl font-bold text-slate-800 text-center mb-4">
              <span className="font-extrabold">Name:-</span>{" "}
              {item.jobSeekerName}
            </h1>
            <h1 className="text-lg font-semibold text-slate-800 text-center mb-4">
              <span className="font-bold">Email:-</span> {item.email}
            </h1>
            <h1 className="text-lg font-semibold text-slate-800 text-center mb-4">
              <span className="font-bold">Github:-</span> {item.github}
            </h1>
            <h1 className="text-base font-bold uppercase text-slate-800 text-center mb-4">
              Applied For - {item.jobTitle}
            </h1>
            <div className="flex text-center justify-center align-middle gap-3">
              <h1 className="text-xl mt-1 text-center font-semibold capitalize text-slate-800 items-center">
                Download Resume:
              </h1>
              <a
                href={`${serverUrl}/uploads/${item.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-3xl text-white"
              >
                Resume
              </a>
            </div>
            <div className="w-full flex justify-evenly mt-7">
              <button
                onClick={(e) =>
                  acceptHandler(
                    e,
                    item.jobSeekerName,
                    item.email,
                    item.jobTitle,
                    item._id
                  )
                }
                className="px-5 py-2 bg-white text-black text-xl rounded-3xl font-semibold"
              >
                Accept
              </button>
              <button
                onClick={(e) =>
                  rejectHandler(
                    e,
                    item.jobSeekerName,
                    item.email,
                    item.jobTitle,
                    item._id
                  )
                }
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
    </div>
  );
};

export default JobSeekerApproval;
