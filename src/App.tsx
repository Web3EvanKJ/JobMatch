import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApplicant from "./pages/DashboardApplicant";
import DashboardRecruiter from "./pages/DashboardRecruiter";
import JobDetail from "./pages/JobDetail";
import MyApplications from "./pages/MyApplications";
import MyJobPosts from "./pages/MyJobPosts";
import ApplicantsList from "./pages/ApplicantsList";
import JobList from "./pages/JobList";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* All Logged In Users */}
      <Route
        path="/job/:id"
        element={
          <PrivateRoute role="all">
            <JobDetail />
          </PrivateRoute>
        }
      />
      <Route
        path="/job-list"
        element={
          <PrivateRoute role="all">
            <JobList />
          </PrivateRoute>
        }
      />

      {/* Applicant */}
      <Route
        path="/dashboard/applicant"
        element={
          <PrivateRoute role="applicant">
            <DashboardApplicant />
          </PrivateRoute>
        }
      />
      <Route
        path="/applications"
        element={
          <PrivateRoute role="applicant">
            <MyApplications />
          </PrivateRoute>
        }
      />

      {/* Recruiter */}
      <Route
        path="/dashboard/recruiter"
        element={
          <PrivateRoute role="recruiter">
            <DashboardRecruiter />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-jobs"
        element={
          <PrivateRoute role="recruiter">
            <MyJobPosts />
          </PrivateRoute>
        }
      />
      <Route
        path="/job/:id/applicants"
        element={
          <PrivateRoute role="recruiter">
            <ApplicantsList />
          </PrivateRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
