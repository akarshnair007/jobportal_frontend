import React from "react";
import Header from "../Components/Header";

const Recruiter_Page = () => {
  return (
    <div className="w-full h-full bg-[#000236]">
      {/* Header Section */}
      <Header />

      {/* Statistics Section */}
      <div className="w-full h-auto flex-row flex-wrap gap-24 sm:px-16 p-2 py-5">
        <div className="flex flex-wrap justify-between mb-20">
          <div className="relative w-full sm:w-[50%] sm:h-[50%] ">
            <div className="relative w-[98%] sm:w-[78%] h-[200px] sm:h-[449px] bg-[#d9d9d9] rounded-[21px]">
              <div className="absolute w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] top-[15%] left-[8%] bg-[#a2a2a2] rounded-[65px/66.5px]">
                <div className="absolute top-[28%] left-[39%] [font-family:'Kanit-Regular',Helvetica] font-normal text-white text-[20px] sm:text-[35px] tracking-[0] leading-[normal]">
                  5
                </div>
              </div>
              <div className="absolute top-[23%] sm:top-[21%] left-[25%] sm:left-[130px] [font-family:'Kanit-Regular',Helvetica] font-normal text-black sm:text-3xl text-lg tracking-[0] leading-[normal]">
                Total Job Posts
              </div>

              <div className="absolute w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] top-[60%] left-[8%] bg-[#a2a2a2] rounded-[65px/66.5px]">
                <div className="absolute top-[28%] left-[39%] [font-family:'Kanit-Regular',Helvetica] font-normal text-white text-[20px] sm:text-[35px] tracking-[0] leading-[normal]">
                  3
                </div>
              </div>
              <div className="absolute top-[67%] whitespace-nowrap sm:top-[66%] left-[25%] sm:left-[130px] [font-family:'Kanit-Regular',Helvetica] font-normal text-black sm:text-3xl text-lg tracking-[0] leading-[normal]">
                Total Rejected Job Posts
              </div>
            </div>
          </div>
          <div>
            <img
              src="/img_6.png"
              alt=""
              className=" w-[80%] sm:w-[80%] h-[90%] sm:h-[80%]"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-between sm:px-16 p-2 py-5">
        <div className="left">
          <img
            src="/img_7.png"
            className=" w-[80%] sm:w-[80%] h-[90%] sm:h-[80%]"
            alt=""
          />
        </div>
        <div className="relative w-full sm:w-[50%] sm:h-[50%] ">
          <div className="relative w-[98%] sm:w-[545px] sm:h-[449px] bg-[#d9d9d9] rounded-[21px]">
            <form method="post" className="sm:px-10 px-2 pt-10 text-center">
              <div className="mb-10">
                <label
                  htmlFor=""
                  className="font-semibold text-sm sm:text-xl mr-2"
                >
                  Job Title:
                </label>
                <input
                  type="text"
                  placeholder="Enter Job-Title"
                  className=" rounded-xl outline-none w-[55%] sm:w-[80%] border-2 border-slate-500 py-1 sm:px-3 sm:py-3"
                />
              </div>
              <div className="flex items-center mb-10">
                <label
                  htmlFor=""
                  className="font-semibold text-sm sm:text-xl mr-2"
                >
                  Experience:
                </label>
                <input
                  type="number"
                  placeholder="Enter Total Experience Required"
                  className=" rounded-xl outline-none w-[55%] sm:w-[80%] border-2 border-slate-500 py-1 sm:px-3 sm:py-3"
                />
              </div>
              <div className="flex flex-col items-center">
                <label
                  htmlFor=""
                  className="font-semibold text-sm sm:text-xl mr-2"
                >
                  Job Description:
                </label>
                <textarea
                  name=""
                  id=""
                  className="w-[80%] rounded-xl outline-none  border-2 border-slate-500 px-3 py-3"
                ></textarea>
              </div>
              <input
                type="submit"
                className=" px-10 mb-5 py-3 sm:py-3 mt-3  bg-slate-600 text-white rounded-xl"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter_Page;
