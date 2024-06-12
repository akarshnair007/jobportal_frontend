import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import Login_Register from "./Pages/Login_Register";
import JobSeeker_Register from "./Pages/JobSeeker_Register";
import Recruiter_Register from "./Pages/Recruiter_Register";
import Login_Admin from "./Pages/Login_Admin";
import Login_JobSeeker from "./Pages/Login_JobSeeker";
import Recruiter_Login from "./Pages/Recruiter_Login";
import Recruiter_Page from "./Pages/Recruiter_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login_register" element={<Login_Register />} />
        <Route path="/job_seeker_register" element={<JobSeeker_Register />} />
        <Route path="/recruiter_register" element={<Recruiter_Register />} />
        <Route path="/admin_login" element={<Login_Admin />} />
        <Route path="/job_seeker_login" element={<Login_JobSeeker />} />
        <Route path="/recruiter_login" element={<Recruiter_Login />} />
        <Route path="/recruiter_page" element={<Recruiter_Page />} />
      </Routes>
    </>
  );
}

export default App;
