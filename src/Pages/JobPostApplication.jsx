import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobPostApplication = ({ token, jobPostAPI }) => {
  const [messageForm, setMessageForm] = useState({
    title: "",
    experience: "fresher",
    jobDescription: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const { title, experience, jobDescription } = messageForm;

    console.log(messageForm);
    if (!title || !experience || !jobDescription) {
      toast.info("Please fill the forms");
    } else {
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const result = await jobPostAPI(messageForm, reqHeader);
        console.log(result);
        if (result.status === 200) {
          toast.success("Job Posted Successfully");

          setMessageForm({
            title: "",
            experience: "fresher",
            jobDescription: "",
          });
        } else {
          toast.info("Couldn't Submit Job Post");
        }
      }
    }
  };

  return (
    <form method="post" className="sm:px-10 px-2 pt-10 text-center">
      <div className="mb-10">
        <label htmlFor="" className="font-semibold text-sm sm:text-xl mr-2">
          Job Title:
        </label>
        <input
          type="text"
          placeholder="Enter Job-Title"
          value={messageForm.title}
          onChange={(e) =>
            setMessageForm({
              ...messageForm,
              title: e.target.value,
            })
          }
          className="rounded-xl outline-none w-[55%] sm:w-[80%] border-2 border-slate-500 py-1 sm:px-3 sm:py-3"
        />
      </div>
      <div className="flex items-center mb-10">
        <label htmlFor="" className="font-semibold text-sm sm:text-xl mr-2">
          Experience:
        </label>
        <select
          id="experience"
          className="w-full p-2 rounded-xl outline-none border-2 border-slate-500"
          onChange={(e) =>
            setMessageForm({
              ...messageForm,
              experience: e.target.value,
            })
          }
        >
          <option value="fresher">Fresher</option>
          <option value="experienced">Experienced</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="" className="font-semibold text-sm sm:text-xl mr-2">
          Job Description:
        </label>
        <textarea
          value={messageForm.jobDescription}
          style={{ height: "95px", width: "100%" }} // Adjusted height and width using inline styles
          className="w-[80%] h-[300px] rounded-xl outline-none border-2 border-slate-500 px-3 py-3 resize-none"
          onChange={(e) =>
            setMessageForm({
              ...messageForm,
              jobDescription: e.target.value,
            })
          }
        ></textarea>
      </div>
      <input
        type="submit"
        className=" px-10 mb-5 py-3 sm:py-3 mt-3  bg-slate-600 text-white rounded-xl"
        value="Submit"
        onClick={(e) => submitHandler(e)}
      />
    </form>
  );
};

export default JobPostApplication;
