import { useEffect, useState } from "react";
import { Link } from "react-router";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  role: string;
  salary: string;
  description: string;
}

const Home = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs?limit=5"); // fetch latest 5 jobs
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find Your Dream Job Today 🚀
        </h1>
        <p className="mb-6 text-lg">
          Browse opportunities from top companies or post a job as a recruiter.
        </p>
        {!user ? (
          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600"
            >
              Login
            </Link>
          </div>
        ) : (
          <p className="text-lg">
            Welcome back, <span className="font-semibold">{user.email}</span> 👋
          </p>
        )}
      </section>

      {/* Job Listings Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Latest Job Listings
        </h2>
        {jobs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="border p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">
                  {job.company} • {job.location}
                </p>
                <p className="text-sm mt-2 line-clamp-3">{job.description}</p>
                <Link
                  to={`/jobs/${job._id}`}
                  className="mt-3 inline-block text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No jobs available right now.
          </p>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            View All Jobs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
