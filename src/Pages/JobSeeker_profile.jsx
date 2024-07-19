import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faFile } from "@fortawesome/free-solid-svg-icons";
import { UpdateJobSeekerProfileAPI } from "../Services/AllApi";
import { serverUrl } from "../Services/Base_Url";
import { Link, useNavigate } from "react-router-dom";

const JobSeeker_profile = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    github: "",
    profile: "",
    resume: "",
  });
  const navigate = useNavigate("");
  const [existingImage, setExistingImage] = useState("");
  const [existingResume, setExistingResume] = useState("");
  const [preview, setPreview] = useState("");
  const [updateStatus, setUpdateStatus] = useState(false);

  const updateHandler = async (e) => {
    e.preventDefault();
    const { username, email, github, profile, resume } = userDetails;
    if (!username && !email && !github && !resume && !profile) {
      toast.info("Please fill the form");
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("email", email);
      reqBody.append("github", github);
      preview
        ? reqBody.append("profile", profile)
        : reqBody.append("profile", existingImage);
      reqBody.append("resume", resume);

      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await UpdateJobSeekerProfileAPI(reqBody, reqHeader);
      if (result.status === 200) {
        toast.success("Profile Update Successfully");
        sessionStorage.setItem("jobSeeker", JSON.stringify(result.data));
        setUpdateStatus(!updateStatus);
        setTimeout(() => {
          navigate("/jobseeker_page");
        }, 3000);
      } else {
        console.log(result);
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("jobSeeker")) {
      const user = JSON.parse(sessionStorage.getItem("jobSeeker"));
      setUserDetails({
        ...userDetails,
        email: user.email,
        username: user.username,
        github: user.github,
      });
      setExistingImage(user.profile);
      setExistingResume(user.resume);
    }
  }, [updateStatus]);

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile));
    } else {
      setPreview("");
    }
  }, [userDetails.profile]);

  return (
    <div className="w-full h-screen sm:h-auto">
      <Header />

      <div className="w-full h-full bg-[#000236]">
        <div className="w-full flex justify-end py-5 text-white font-semibold text-base sm:text-lg pe-3 ">
          <Link to={"/jobseeker_page"}>
            <p>
              <FontAwesomeIcon icon={faArrowLeftLong} className="me-2" />
              Back to Jobs page
            </p>
          </Link>
        </div>
        <div className="flex justify-center h-auto">
          <div className="bg-[#d9d9d9] rounded-[15px] w-[60%] sm:w-[55%] h-full mt-5">
            <h1 className="text-center text-2xl font-semibold mt-2">
              Update Details
            </h1>
            <form className="flex flex-col items-center gap-5 align-center justify-center mt-7">
              <div className="flex gap-9">
                <label htmlFor="image">
                  <input
                    id="image"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        profile: e.target.files[0],
                      });
                    }}
                  />
                  {existingImage === "" ? (
                    <img
                      src={
                        preview
                          ? preview
                          : "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg"
                      }
                      alt=""
                      className="h-[120px] w-[120px] rounded-full border-2 border-slate-700"
                    />
                  ) : (
                    <img
                      src={
                        preview
                          ? preview
                          : `${serverUrl}/uploads/${existingImage}`
                      }
                      alt=""
                      className="h-[120px] w-[120px] rounded-full border-2 border-slate-700"
                    />
                  )}
                </label>
              </div>

              <div className="flex gap-2">
                <label className="text-md mt-2 sm:text-2xl text-slate-600 font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  value={userDetails.email}
                  placeholder="Edit Email"
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
                <label className="text-md mt-2  sm:text-2xl text-slate-600 font-semibold">
                  Name:
                </label>
                <input
                  type="text"
                  value={userDetails.username}
                  placeholder="Edit Name"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      username: e.target.value,
                    })
                  }
                  className="w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
                />
              </div>
              <div className="flex gap-2">
                <label className="text-md mt-2  sm:text-2xl text-slate-600 font-semibold">
                  Github:
                </label>
                <input
                  type="text"
                  placeholder="Edit Github"
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
                <label className="text-md mt-2  sm:text-2xl text-slate-600 font-semibold">
                  Resume:
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      resume: e.target.files[0],
                    })
                  }
                  className="w-32 sm:w-80 rounded-lg py-1 px-2 sm:py-3 sm:px-3 outline-none border-2 bg-slate-500 text-white border-slate-700"
                />
              </div>
              {existingResume && (
                <div className="mt-1">
                  <a
                    href={`${serverUrl}/uploads/${existingResume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-bold rounded-2xl px-2 py-3 bg-slate-600"
                  >
                    View Existing Resume{" "}
                    <FontAwesomeIcon icon={faFile} className="ms-2" />{" "}
                  </a>
                </div>
              )}
              <button
                type="submit"
                onClick={updateHandler}
                className="bg-[#000236] text-white font-semibold rounded-lg px-5 py-2 sm:px-10 sm:py-3 mb-1"
              >
                Update and Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker_profile;
