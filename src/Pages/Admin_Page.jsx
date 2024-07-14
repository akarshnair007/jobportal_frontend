import React, { useCallback, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JobPostApproval from "../Components/JobPostApproval";
import {
  deleteJobSeekerAPI,
  deleteRecruiterAPI,
  getAllJobSeekersAPI,
  getAllRecruitersAPI,
} from "../Services/AllApi";
import { toast } from "react-toastify";

const Admin_Page = () => {
  const [jobSeeker, setJobSeeker] = useState([]);
  const [recruiter, setRecruiter] = useState([]);

  const fetchUsers = useCallback(async () => {
    const jobSeekerResponse = await getAllJobSeekersAPI();
    setJobSeeker(jobSeekerResponse.data);
    const recruiterResponse = await getAllRecruitersAPI();
    setRecruiter(recruiterResponse.data);
  }, []);

  const deleteJobSeekerHandler = async (e, jobSeekerId) => {
    e.preventDefault();
    console.log(jobSeekerId);
    const reqBody = { id: jobSeekerId }; // Correctly create the request body
    console.log(reqBody);

    const result = await deleteJobSeekerAPI(reqBody);
    if (result.status == 200) {
      console.log(result);

      toast.success("User has been deleted Successfully");
      fetchUsers();
    } else {
      console.log(result);
      toast.success("Something went wrong");
    }
  };
  const deleteRecruiterHandler = async (e, recruiterId) => {
    e.preventDefault();
    console.log(recruiterId);
    const reqBody = { id: recruiterId }; // Correctly create the request body
    console.log(reqBody);

    const result = await deleteRecruiterAPI(reqBody);
    if (result.status == 200) {
      console.log(result);

      toast.success("Recruiter has been deleted Successfully");
      fetchUsers();
    } else {
      console.log(result);
      toast.success("Something went wrong");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(jobSeeker);
  console.log(recruiter);

  return (
    <div className="main w-full h-full bg-[#000236]">
      <Header />
      {/* total Recruiter and job seekers */}
      <div className="w-full h-auto flex-row flex-wrap gap-24 sm:px-16 p-2 py-5">
        <div className="flex flex-wrap justify-between mb-20">
          <div className="relative w-full  sm:h-[50%] ">
            <div className="relative w-[98%] sm:full h-[200px] sm:h-[449px] bg-[#d9d9d9] rounded-[21px]">
              <div className="absolute w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] top-[16%] left-[65%] sm:left-[40%] bg-[#a2a2a2] rounded-[65px/66.5px]">
                <div className="absolute top-[28%] left-[39%] [font-family:'Kanit-Regular',Helvetica] font-normal text-white text-[20px] sm:text-[35px] tracking-[0] leading-[normal]">
                  {jobSeeker.length}{" "}
                </div>
              </div>
              <div className="absolute top-[23%] sm:top-[21%] left-[25%] sm:left-[50%] [font-family:'Kanit-Regular',Helvetica] font-normal text-black sm:text-4xl text-lg tracking-[0] leading-[normal]">
                Total Job Seekers
              </div>

              <div className="absolute w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] top-[60%] left-[65%] sm:left-[40%] bg-[#a2a2a2] rounded-[65px/66.5px]">
                <div className="absolute top-[28%] left-[39%] [font-family:'Kanit-Regular',Helvetica] font-normal text-white text-[20px] sm:text-[35px] tracking-[0] leading-[normal]">
                  {recruiter.length}
                </div>
              </div>
              <div className="absolute top-[67%] whitespace-nowrap sm:top-[66%] left-[25%] sm:left-[50%] [font-family:'Kanit-Regular',Helvetica] font-normal text-black sm:text-4xl text-lg tracking-[0] leading-[normal]">
                Total Recruiters
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter accept/reject form */}
      <div className="w-full h-auto ">
        <div className="relative w-[95%] sm:w-[89%] rounded-3xl h-auto mx-2 sm:mx-16 bg-[#d9d9d9] flex flex-col items-center p-5">
          <div className="heading flex jus">
            <h1 className="text-2xl font-extrabold tracking-tighter text-center sm:mx-16 m-2 my-5">
              Job Post Applications
            </h1>
          </div>
          {/* Multiple JobPostApproval components */}
          <JobPostApproval />
        </div>
      </div>

      <div className="w-full h-auto mt-20">
        <div className="relative sm:w-[89%] w-[95%] rounded-3xl h-auto sm:mx-16 mx-2 bg-[#d9d9d9] justify-center overflow-x-auto">
          <div className="heading flex justify-center">
            <h1 className="text-2xl font-extrabold tracking-tighter text-center sm:mx-16 m-2 my-5 mt-10">
              Job Seekers
            </h1>
          </div>
          <table className="min-w-full ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-black">Name</th>
                <th className="py-2 px-4 border-b-2 border-black">Email</th>
                <th className="py-2 px-4 border-b-2 border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobSeeker.length > 0 ? (
                jobSeeker.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4 border-b">{item.username}</td>
                    <td className="py-2 px-4 border-b">{item.email}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <button
                        onClick={(e) => deleteJobSeekerHandler(e, item._id)}
                        className="ms-2 px-5 py-1 bg-black text-white text-md rounded-3xl font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h1 className="font-bold text-center text-2xl text-slate-800">
                  No Job Seekers
                </h1>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full h-auto my-20">
        <div className="relative sm:w-[89%] w-[95%] rounded-3xl h-auto sm:mx-16 mx-2 bg-[#d9d9d9] justify-center overflow-x-auto">
          <div className="heading flex justify-center">
            <h1 className="text-2xl font-extrabold tracking-tighter text-center sm:mx-16 m-2 my-5 mt-10">
              Recruiters
            </h1>
          </div>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-black">Name</th>
                <th className="py-2 px-4 border-b-2 border-black">Email</th>
                <th className="py-2 px-4 border-b-2 border-black">
                  Organization Name
                </th>
                <th className="py-2 px-4 border-b-2 border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {recruiter.length > 0 ? (
                recruiter.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4 border-b">{item.username}</td>
                    <td className="py-2 px-4 border-b">{item.email}</td>
                    <td className="py-2 px-4 border-b">
                      {item.organizationName}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      <button
                        onClick={(e) => deleteRecruiterHandler(e, item._id)}
                        className="ms-2 px-5 py-1 bg-black text-white text-md rounded-3xl font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h1 className="font-bold text-center text-2xl text-slate-800">
                  No Job Seekers
                </h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin_Page;
