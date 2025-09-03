import { useState } from "react";
import { jobs } from "../data/jobs";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import CompanyMarquee from "@/components/CompanyMarquee";

const Home = () => {
  const [search, setSearch] = useState("");

  // Filter jobs based on search input
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()) ||
      job.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Find Your Dream Job Today!
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mb-8 text-lg md:text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Explore opportunities from top companies, apply easily, and take the
            next step in your career.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              size="lg"
              onClick={() => {
                const el = document.getElementById("job-listings");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Browse Jobs
            </Button>
          </motion.div>
        </div>
      </section>
      <CompanyMarquee />

      {/* Job Listings */}
      <section id="job-listings" className="max-w-3xl mx-auto py-16 px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Latest Job Listings
          </h2>
          <p className="text-gray-600 text-sm">
            {filteredJobs.length} opportunities available
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search by title, company, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-xl shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="shadow-sm hover:shadow-md transition border rounded-none border-gray-200"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {/* Company Logo Placeholder */}
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                    <img
                      src={job.url}
                      alt={job.title}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {job.jobSummary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {job.location}
                    </span>
                    <Badge variant="secondary">{job.type || "Full-time"}</Badge>
                  </div>
                  <Button
                    asChild
                    variant="link"
                    className="mt-2 px-0 text-blue-600"
                  >
                    <Link to={`/jobs/${job.id}`}>View Details →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No jobs found. Try another search
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
