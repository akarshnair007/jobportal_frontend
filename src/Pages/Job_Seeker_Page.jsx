// Job_Seeker_Page.jsx
import React, { useEffect, useState, useCallback } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JobBox from "../Components/JobBox";
import { GetAcceptedJobPostAPI } from "../Services/AllApi";

const Job_Seeker_Page = () => {
  const [user, setUser] = useState({});
  const [searchFields, setSearchFields] = useState({
    experience: "Fresher",
    jobType: "software", // Default to software
  });
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("jobSeeker")) {
      const data = sessionStorage.getItem("jobSeeker");
      setUser(JSON.parse(data));
    }
  }, []);

  const fetchJobs = useCallback(async () => {
    try {
      const result = await GetAcceptedJobPostAPI();
      setJobs(result.data);
      setFilteredJobs(result.data); // Show all jobs by default
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const jobTypeCategories = {
    management: ["hr", "digital", "sales", "operations", "project", "product"],
    software: [
      "software",
      "developer",
      "stack",
      "engineer",
      "programmer",
      "tech lead",
    ],
    design: [
      "design",
      "uiux",
      "ui ux",
      "ui/ux",
      "graphic",
      "product designer",
      "interaction",
    ],
    marketing: ["marketing", "content", "seo", "advertising", "social media"],
    finance: [
      "finance",
      "accounting",
      "investment",
      "analyst",
      "auditor",
      "controller",
    ],
    healthcare: [
      "healthcare",
      "nurse",
      "doctor",
      "pharmacist",
      "therapist",
      "medical",
    ],
    education: [
      "education",
      "teacher",
      "professor",
      "instructor",
      "trainer",
      "tutor",
    ],
    customer_service: [
      "customer service",
      "support",
      "call center",
      "help desk",
      "client relations",
    ],
    logistics: [
      "logistics",
      "supply chain",
      "warehouse",
      "transportation",
      "distribution",
    ],
    legal: [
      "legal",
      "lawyer",
      "attorney",
      "paralegal",
      "compliance",
      "legal assistant",
    ],
  };

  const SearchHandler = (e) => {
    e.preventDefault();
    const filtered = jobs.filter((job) => {
      const matchesExperience =
        job.experience.toLowerCase() ===
          searchFields.experience.toLowerCase() ||
        searchFields.experience === "All";

      const jobTypes = jobTypeCategories[searchFields.jobType];
      const matchesJobType = jobTypes.some((type) =>
        job.title.toLowerCase().includes(type)
      );

      return matchesExperience && matchesJobType;
    });
    setFilteredJobs(filtered);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#000236] flex flex-col">
        <Header />
        <div className="w-full h-40 flex">
          <div className="relative filterSearch sm:mx-10 mx-2 rounded-2xl my-5 w-full bg-[#d9d9d9]">
            <div className="flex justify-evenly items-center mt-3">
              <div>
                <label
                  htmlFor="experience"
                  className="block text-gray mb-2 font-medium text-sm sm:text-base"
                >
                  Job Experience
                </label>
                <select
                  id="experience"
                  className="w-full p-2 rounded"
                  value={searchFields.experience}
                  onChange={(e) =>
                    setSearchFields({
                      ...searchFields,
                      experience: e.target.value,
                    })
                  }
                >
                  <option value="fresher">Fresher</option>
                  <option value="experienced">Experienced</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="jobType"
                  className="block text-gray mb-2 font-medium text-sm sm:text-base"
                >
                  Job Type
                </label>
                <select
                  id="jobType"
                  className="w-full p-2 rounded"
                  value={searchFields.jobType}
                  onChange={(e) =>
                    setSearchFields({
                      ...searchFields,
                      jobType: e.target.value,
                    })
                  }
                >
                  <option value="software">Software</option>
                  <option value="management">Management</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="customer_service">Customer Service</option>
                  <option value="logistics">Logistics</option>
                  <option value="legal">Legal</option>
                </select>
              </div>
              <button
                onClick={(e) => SearchHandler(e)}
                className="bg-blue-500 text-white px-6 py-2 rounded mt-7"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <JobBox user={user} jobs={filteredJobs} fetchJobs={fetchJobs} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Job_Seeker_Page;
