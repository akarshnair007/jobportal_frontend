import { motion } from "framer-motion";

import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full h-screen ">
      <div className="bg-cover bg-center w-full">
        <div className="w-full h-screen">
          {/* Header Section */}
          <Header />
          {/* Main Content */}
          <main className="w-full flex flex-col items-center bg-[#000236]">
            {/* Section 1 */}
            <section className="w-full flex justify-between relative items-center py-12 px-14 sm:px-14">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col space-y-4 md:ml-8 text-white"
              >
                <p className=" text-sm sm:text-3xl">
                  <span className="text-[#9d88f2]">
                    Can’t Find Best Employees
                  </span>
                  <br />
                  <span>Let us help you</span>
                </p>
                <Link to={"/recruiter_register"}>
                  <button className="bg-[#0c2a79] mt-3 text-sm px-2 sm:px-5 py-2 sm:py-2 sm:text-xl rounded-md">
                    Sign in as Recruiter
                  </button>
                </Link>
              </motion.div>

              <motion.img
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className=" w-1/3 sm:1/3 h-auto"
                alt="Isometric view of colleagues discussing the project in VR"
                src="/img_1.png"
              />
            </section>
            <img src="/Vector_1.png" className="w-full h-1/3" alt="" />
            <img src="/Vector_2.png" className="w-full h-1/4" alt="" />

            {/* Section 2 */}
            <section className="w-full flex justify-between relative items-center py-12 px-14 sm:px-14">
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className=" w-1/3 sm:1/3 h-auto"
                alt="Isometric view of man working online"
                src="/img_2.png"
              />
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col space-y-4 md:ml-8 text-white"
              >
                <p className=" text-sm sm:text-3xl">
                  <span className="text-[#9d88f2]">Can’t Find A JOB</span>
                  <br />
                  <span>Let us help you</span>
                </p>
                <Link to={"/job_seeker_register"}>
                  <button className="bg-[#0c2a79] mt-3 text-sm px-2 sm:px-5 py-2 sm:py-2 sm:text-xl rounded-md">
                    Sign in as Job Seeker
                  </button>
                </Link>
              </motion.div>
            </section>
            <img src="/Vector_1.png" className="w-full h-1/3" alt="" />
            <img src="/Vector_2.png" className="w-full h-1/4" alt="" />
            {/* Section 3 */}
            <section className="w-full  flex flex-wrap justify-between flex-col md:flex-row items-center py-12 px-20 bg-[#000236]">
              <div className="text-center text-white mb-12">
                <motion.h2
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 12, opacity: 100 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className=" text-sm sm:text-3xl"
                >
                  We Provide{" "}
                  <span className="text-[#9d88f2]">Best In-Class</span> Job Post
                  and Employees
                </motion.h2>
                <div className="part_1 flex justify-center justify-between mt-14">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: -4, opacity: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex justify-between items-center"
                  >
                    <p className=" text-xs	 sm:text-xl mt-4 font-semibold">
                      • Admin will verify each job post
                    </p>
                  </motion.div>

                  <motion.img
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className=" w-1/4 sm:1/3 h-auto"
                    alt="Isometric view of colleagues discussing work project"
                    src="/img_3.png"
                  />
                </div>
                <div className="part_2 flex justify-center justify-between mt-14">
                  <motion.img
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 12, opacity: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className=" w-1/4 sm:1/3 h-auto"
                    alt="Notification"
                    src="/img_4.png"
                  />
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 25, opacity: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex justify-between items-center"
                  >
                    <p className=" text-xs	 sm:text-xl mt-4 font-semibold">
                      • Employees will get notification whether they are
                      selected or rejected
                    </p>
                  </motion.div>
                </div>
                <div className="part_3 flex justify-center justify-between mt-14">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: -10, opacity: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex justify-between items-center"
                  >
                    <p className=" text-xs sm:text-xl mt-4 font-semibold">
                      • Recruiter can select employees based on their skill and
                      send them notification if they are selected or not
                    </p>
                  </motion.div>

                  <motion.img
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className=" w-1/4 sm:1/3 h-auto"
                    alt="Woman recruiter"
                    src="/img_5.png"
                  />
                </div>
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};
