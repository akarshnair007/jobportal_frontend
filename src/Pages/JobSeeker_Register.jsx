import React, { useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jobseekerRegisterAPI } from "../Services/AllApi";

const JobSeeker_Register = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    github: "",
    experience: "fresher",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const { username, email, password, github, experience } = userDetails;
    if (!username || !email || !password || !github || !experience) {
      toast.info("Please fill all the required fields");
    } else {
      const result = await jobseekerRegisterAPI(userDetails);
      if (result.status === 200) {
        toast.success("Registration Successful");

        setUserDetails({
          username: "",
          email: "",
          password: "",
          github: "",
          experience: "fresher",
        });
        setTimeout(() => {
          navigate("/job_seeker_login");
        }, 4000);
      } else {
        toast.warning("Something went wrong");
      }
    }
  };

  return (
    <div className="w-full h-auto bg-[#000236] ">
      <Header />
      <h1 className="text-center font-semibold text-xl sm:text-4xl mt-5 text-[#9D88F2]">
        Register As Job Seeker
      </h1>

      <div className="flex justify-center h-screen sm:h-auto">
        <div className="bg-[#d9d9d9] rounded-[15px] w-[60%] sm:w-[55%] h-[60%] sm:h-[100%] mt-5">
          <form className="flex flex-col items-center gap-5 align-center justify-center mt-10">
            <div className="flex gap-3">
              <label className="text-md ms-[-10px] sm:text-2xl text-slate-600 font-semibold">
                Username:
              </label>{" "}
              <input
                type="text"
                placeholder="Enter username"
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    username: e.target.value,
                  })
                }
                className="w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>

            <div className="flex gap-3">
              <label className="text-md me-5 sm:me-10 sm:text-2xl text-slate-600 font-semibold">
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
                className="w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>

            <div className="flex gap-2">
              <label className="text-md sm:text-2xl text-slate-600 font-semibold">
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
                className="w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>

            <div className="flex gap-2">
              <label className="text-md sm:me-6 me-5 sm:text-2xl text-slate-600 font-semibold">
                Github:
              </label>
              <input
                type="text"
                placeholder="Enter Github"
                value={userDetails.github}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    github: e.target.value,
                  })
                }
                className="w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              />
            </div>

            <div className="flex gap-2">
              <label className="text-md ms-[-10px] sm:ms-[-20px] sm:text-2xl text-slate-600 font-semibold">
                Experience:
              </label>
              <select
                value={userDetails.experience}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    experience: e.target.value,
                  })
                }
                className="w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
              >
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            <button
              className="px-10 py-2 sm:py-3 rounded-lg text-md sm:text-xl font-semibold bg-[#214299] text-white mt-2"
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>

            <p className="font-semibold">
              Already have an account?{" "}
              <Link to={"/job_seeker_login"}>
                <span className="font-bold">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </div>
  );
};

export default JobSeeker_Register;
