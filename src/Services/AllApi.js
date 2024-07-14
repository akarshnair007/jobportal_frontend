import { CommonApi } from "./CommonApi";
import { serverUrl } from "./Base_Url";

//apu to make admin login
export const adminLoginAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/admin/register`, reqBody, "");
};

//api to make jobseeker regsiter
export const jobseekerRegisterAPI = async (reqBody) => {
  return await CommonApi(
    "POST",
    `${serverUrl}/jobseeker/register`,
    reqBody,
    ""
  );
};

//api to make jobseeker login
export const jobseekerLoginAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/jobseeker/login`, reqBody, "");
};

//api to make recruiters register
export const recruiterRegisterAPI = async (reqBody) => {
  return await CommonApi(
    "POST",
    `${serverUrl}/recruiter/register`,
    reqBody,
    ""
  );
};

//api to make recruiter login
export const recruiteLoginAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/recruiter/login`, reqBody, "");
};

//api to submit job post
export const jobPostAPI = async (reqBody, reqHeader) => {
  return await CommonApi(
    "POST",
    `${serverUrl}/recruiter/message`,
    reqBody,
    reqHeader
  );
};

//api to get job posts
export const getJobPostAPI = async () => {
  return await CommonApi("GET", `${serverUrl}/jobseeker/posts`, "", "");
};

//api to accept job posts
export const AcceptJobPostsAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/admin/accept`, reqBody, "");
};

//api to reject job posts
export const RejectJobPostsAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/admin/reject`, reqBody, "");
};
//api to accept job posts
export const GetAcceptedJobPostAPI = async () => {
  return await CommonApi("GET", `${serverUrl}/jobseeker/acceptedPosts`, "", "");
};

//api to apply to jobs by job seeker
export const ApplyJobAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/jobseeker/apply`, reqBody, "");
};

// API to get applied jobs by user
export const GetAppliedJobsAPI = async (userId) => {
  return await CommonApi(
    "GET",
    `${serverUrl}/jobseeker/${userId}/applied-jobs`,
    "",
    ""
  );
};

// API to get applied jobs by job Seekers
export const JobSeekerAppliedPostsAPI = async (reqBody) => {
  return await CommonApi(
    "POST",
    `${serverUrl}/recruiter/jobPosts`,
    reqBody,
    ""
  );
};

export const UpdateJobSeekerProfileAPI = async (reqBody, reqHeader) => {
  return await CommonApi(
    "PUT",
    `${serverUrl}/jobseeker/profile/update`,
    reqBody,
    reqHeader
  );
};

export const getAcceptedEmailAPI = async (
  jobSeekerName,
  jobSeekerEmail,
  jobTitle,
  organizationName,
  email,
  postId
) => {
  const reqBody = JSON.stringify({
    jobSeekerName,
    jobSeekerEmail,
    jobTitle,
    organizationName,
    email,
    postId,
  });
  return await CommonApi(
    "POST",
    `${serverUrl}/recruiter/sendEmail/accept`,
    reqBody,
    ""
  );
};
export const getRejectedEmailAPI = async (
  jobSeekerName,
  jobSeekerEmail,
  jobTitle,
  organizationName,
  email,
  postId
) => {
  const reqBody = JSON.stringify({
    jobSeekerName,
    jobSeekerEmail,
    jobTitle,
    organizationName,
    email,
    postId,
  });
  return await CommonApi(
    "POST",
    `${serverUrl}/recruiter/sendEmail/reject`,
    reqBody,
    ""
  );
};
export const getAllJobSeekersAPI = async () => {
  return await CommonApi("GET", `${serverUrl}/jobseeker/getAll`, "", "");
};
export const getAllRecruitersAPI = async () => {
  return await CommonApi("GET", `${serverUrl}/recruiter/getAll`, "", "");
};

export const deleteJobSeekerAPI = async (reqBody) => {
  return await CommonApi(
    "DELETE",
    `${serverUrl}/jobseeker/delete`,
    reqBody,
    ""
  );
};
export const deleteRecruiterAPI = async (reqBody) => {
  return await CommonApi(
    "DELETE",
    `${serverUrl}/recruiter/delete`,
    reqBody,
    ""
  );
};
