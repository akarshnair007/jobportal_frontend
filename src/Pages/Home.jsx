import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export const Home = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="bg-[url('/home.png')] bg-cover bg-center w-full">
        <div className="relative w-full min-h-screen">
          {/* Header Section */}
          <header className="flex justify-between items-center w-full py-4 px-8 bg-[#07001f]">
            <img className=" h-8" alt="Career Connect Logo" src="/logo.png" />
            <div className="flex gap-5">
              <button className="bg-[#204299] text-white text-lg px-2 py-1 rounded-md">
                Admin Login
              </button>
              <button className="bg-[#204299] text-white text-lg px-2 py-1 rounded-md">
                Register/Login
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="w-full flex flex-col items-center bg-[#000236]">
            {/* Section 1 */}
            <section className="w-full flex justify-between relative items-center py-12 px-14 ">
              <div className="flex  flex-col space-y-4 md:ml-8 text-white">
                <p className="text-3xl">
                  <span className="text-[#9d88f2]">
                    Can’t Find Best Employees
                  </span>
                  <br />
                  <span>Let us help you</span>
                </p>
                <button className="bg-[#0c2a79] mt-3 text-xl px-5 py-3 rounded-md">
                  Sign in as Recruiter
                </button>
              </div>

              <img
                className=" w-1/3 h-auto"
                alt="Isometric view of colleagues discussing the project in VR"
                src="/img_1.png"
              />
            </section>
            <img src="/Vector_1.png" className="w-full h-1/3" alt="" />
            <img src="/Vector_2.png" className="w-full h-1/4" alt="" />

            {/* Section 2 */}
            <section className="w-full  flex justify-between flex-col md:flex-row items-center py-12 px-32 bg-[#000236]">
              <img
                className=" w-1/3 h-auto"
                alt="Isometric view of man working online"
                src="/img_2.png"
              />
              <div className="flex flex-col space-y-4 md:ml-8 text-white">
                <p className="text-3xl">
                  <span className="text-[#9d88f2]">Can’t Find A JOB</span>
                  <br />
                  <span>Let us help you</span>
                </p>
                <button className="bg-[#0c2a79] mt-3 text-xl px-5 py-3 rounded-md">
                  Sign in as Job Seeker
                </button>
              </div>
            </section>
            <img src="/Vector_1.png" className="w-full h-1/3" alt="" />
            <img src="/Vector_2.png" className="w-full h-1/4" alt="" />
            {/* Section 3 */}
            <section className="w-full  flex justify-between flex-col md:flex-row items-center py-12 px-20 bg-[#000236]">
              <div className="text-center text-white mb-12">
                <h2 className="text-4xl">
                  We Provide{" "}
                  <span className="text-[#9d88f2]">Best In-Class</span> Job Post
                  and Employees
                </h2>
                <div className="part_1 flex justify-center justify-between mt-14">
                  <div className="flex justify-between items-center">
                    <p className="text-xl mt-4 font-semibold">
                      • Admin will verify each job post
                    </p>
                  </div>

                  <img
                    className="w-1/3 h-auto"
                    alt="Isometric view of colleagues discussing work project"
                    src="/img_3.png"
                  />
                </div>
                <div className="part_2 flex justify-center justify-between mt-14">
                  <img
                    className="w-1/3 h-auto"
                    alt="Notification"
                    src="/img_4.png"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xl mt-4 font-semibold">
                      • Employees will get notification whether they are
                      selected or rejected
                    </p>
                  </div>
                </div>
                <div className="part_3 flex justify-center justify-between mt-14">
                  <div className="flex justify-between items-center">
                    <p className="text-xl mt-4 font-semibold">
                      • Recruiter can select employees based on their skill and
                      send them notification if they are selected or not
                    </p>
                  </div>

                  <img
                    className="w-1/3 h-auto"
                    alt="Woman recruiter"
                    src="/img_5.png"
                  />
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="w-full flex flex-col items-center bg-[#07001f] text-white py-12">
              <div className="flex justify-around w-full max-w-5xl">
                <div className="text-center">
                  <img
                    className="w-40 h-auto"
                    alt="Career connect high"
                    src="/logo.png"
                  />
                  <p className="text-xl font-bold mt-4">
                    Trusted Professional Reliable
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-4">Follow us on</h3>
                  <div className="flex flex-col gap-5">
                    <FontAwesomeIcon icon={faInstagram} className="fa-lg	" />{" "}
                    <FontAwesomeIcon icon={faXTwitter} className="fa-lg	" />{" "}
                    <FontAwesomeIcon icon={faFacebook} className="fa-lg	" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">Pages</h3>
                  <div className="space-y-2">
                    <p className=" text-xl font-light">Register</p>
                    <p className=" text-xl font-light">Login</p>
                    <p className=" text-xl font-light">Job Page</p>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};
