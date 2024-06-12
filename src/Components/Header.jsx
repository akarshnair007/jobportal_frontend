import React from "react";
import { motion } from "framer-motion";
import Login_Register from "../Pages/Login_Register";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center w-full py-4 px-4 sm:px-8 bg-[#07001f]">
      <Link to={"/"}>
        <motion.img
          className="h-6 sm:h-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          alt="Career Connect Logo"
          src="/logo.png"
        />
      </Link>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex gap-5  sm:mt-0"
      >
        <Link to={"/admin_login"}>
          <button className="bg-[#204299] text-white text-sm sm:text-lg px-2 py-1 rounded-md w-full sm:w-auto">
            Admin Login
          </button>
        </Link>
        <Link to={"/login_register"}>
          {" "}
          <button className="bg-[#204299] text-white text-sm sm:text-lg px-2 py-1 rounded-md w-full sm:w-auto">
            Register/Login
          </button>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
