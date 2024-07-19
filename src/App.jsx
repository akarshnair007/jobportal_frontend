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
import Job_Seeker_Page from "./Pages/Job_Seeker_Page";
import Admin_Page from "./Pages/Admin_Page";
import JobSeeker_profile from "./Pages/JobSeeker_profile";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import Loader from "./Pages/Loader";
import Construction from "./Pages/Construction";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");
    if (!hasLoadedBefore) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoadedBefore", "true");
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login_register" element={<Login_Register />} />
          <Route path="/job_seeker_register" element={<JobSeeker_Register />} />
          <Route path="/recruiter_register" element={<Recruiter_Register />} />
          <Route path="/admin_login" element={<Login_Admin />} />
          <Route path="/job_seeker_login" element={<Login_JobSeeker />} />
          <Route path="/recruiter_login" element={<Recruiter_Login />} />
          <Route path="/not_avaiable" element={<Construction />} />

          <Route
            path="/recruiter_page"
            element={isAuthenticated ? <Recruiter_Page /> : <Recruiter_Login />}
          />
          <Route
            path="/jobseeker_page"
            element={
              isAuthenticated ? <Job_Seeker_Page /> : <Login_JobSeeker />
            }
          />
          <Route
            path="/jobseeker_profile"
            element={
              isAuthenticated ? <JobSeeker_profile /> : <Login_JobSeeker />
            }
          />
          <Route
            path="/admin_page"
            element={isAuthenticated ? <Admin_Page /> : <Login_Admin />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
