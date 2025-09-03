import { useState } from "react";
import { useParams, Link } from "react-router";
import { jobs } from "../data/jobs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
  });

  // Controlled dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!job) {
    return <p className="p-6 text-red-600 font-medium">Job not found.</p>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", { ...formData, jobId: job.id });

    // Reset form and close dialog
    setFormData({ name: "", email: "", resume: "", coverLetter: "" });
    setIsDialogOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg border border-gray-200">
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle className="text-3xl font-bold">{job.title}</CardTitle>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <span>{job.company}</span>
              <span>•</span>
              <span>{job.location}</span>
            </div>
            <Badge variant="secondary" className="mt-2">
              {job.type}
            </Badge>
          </div>
          <img src={job.url} alt={job.title} className="h-30 rounded-full" />
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Job Sections */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Company Overview</h2>
            <p className="text-gray-700">{job.companyOverview}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Job Summary</h2>
            <p className="text-gray-700">{job.jobSummary}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Desired Qualifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.qualifications.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.benefits.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Apply Now
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl mx-auto p-6">
                <DialogHeader>
                  <DialogTitle>Apply for {job.title}</DialogTitle>
                  <DialogDescription>
                    at <span className="font-semibold">{job.company}</span>
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="resume"
                    placeholder="Link to Resume (Google Drive, Dropbox, etc.)"
                    value={formData.resume}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="coverLetter"
                    placeholder="Cover Letter"
                    rows={5}
                    value={formData.coverLetter}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Submit Application
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Button asChild variant="outline">
              <Link to="/">Back to Jobs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
