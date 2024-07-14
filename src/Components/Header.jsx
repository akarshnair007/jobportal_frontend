// src/Components/Header.js
import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverUrl } from "../Services/Base_Url";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { login, logout, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const jobSeeker = sessionStorage.getItem("jobSeeker");
    const recruiter = sessionStorage.getItem("recruiter");
    const admin = sessionStorage.getItem("admin");

    if (jobSeeker || recruiter || admin) {
      let user;
      if (jobSeeker) {
        user = JSON.parse(jobSeeker);
        login(user.token);
        setProfileImage(true);
        setImageUrl(user.profile || "");
      } else if (recruiter) {
        user = JSON.parse(recruiter);
        login(user.token);
      } else {
        user = JSON.parse(admin);
        login(user.token);
      }

      if (user) {
        setUsername(user.username);
      }
    } else {
      logout();
    }
  }, [isAuthenticated, login, logout]);

  const homePageHandler = (e) => {
    e.preventDefault();
    username ? toast.info("Please logout to go to homepage") : navigate("/");
  };

  const logoutHandler = (e) => {
    e.preventDefault();

    toast.success("You are now logged out");
    setTimeout(() => {
      logout();
      sessionStorage.removeItem("token");
      if (sessionStorage.getItem("jobSeeker")) {
        setProfileImage(false);
        sessionStorage.removeItem("jobSeeker");
      } else if (sessionStorage.getItem("recruiter")) {
        sessionStorage.removeItem("recruiter");
      } else {
        sessionStorage.removeItem("admin");
      }
      navigate("/");
    }, 4000);
  };

  return (
    <>
      <header className="flex flex-wrap justify-between items-center w-full py-4 px-4 sm:px-8 bg-[#07001f]">
        <div onClick={(e) => homePageHandler(e)}>
          <motion.img
            className="h-6 sm:h-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            alt="Career Connect Logo"
            src="/logo.png"
          />
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-5  sm:mt-0"
        >
          {username === "" ? (
            <div className="flex gap-5">
              <Link to={"/admin_login"}>
                <button className="bg-[#204299] text-white text-sm sm:text-lg px-2 py-1 rounded-md w-full sm:w-auto">
                  Admin Login
                </button>
              </Link>
              <Link to={"/login_register"}>
                <button className="bg-[#204299] text-white text-sm sm:text-lg px-2 py-1 rounded-md w-full sm:w-auto">
                  Register/Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-5 items-center ">
              <p className="font-light text-white text-sm sm:text-xl">
                Welcome <span className="font-bold">{username}</span>
              </p>
              {profileImage && (
                <Link to={"/jobseeker_profile"}>
                  <img
                    src={
                      imageUrl === ""
                        ? "https://i.pinimg.com/280x280_RS/77/0f/b7/770fb75f5e81e4c2dbe8934f246aeeab.jpg"
                        : `${serverUrl}/uploads/${imageUrl}`
                    }
                    alt=""
                    className="rounded-full h-[45px] w-[45px] border-2 border-slate-700"
                  />
                </Link>
              )}

              <FontAwesomeIcon
                icon={faPowerOff}
                className="fa-2x text-white cursor-pointer"
                onClick={(e) => logoutHandler(e)}
              />
            </div>
          )}
        </motion.div>
      </header>

      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </>
  );
};

export default Header;
