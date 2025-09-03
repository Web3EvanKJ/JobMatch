import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { jobs } from "../data/jobs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Apply() {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
  });

  if (!job) {
    return <p className="p-6">Job not found.</p>;
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
    setFormData({ name: "", email: "", resume: "", coverLetter: "" });
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Apply for {job.title}</h1>
      <p className="text-gray-600 mb-6">
        at <span className="font-semibold">{job.company}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
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
        <Button type="submit" className="w-full bg-blue-600 text-white">
          Submit Application
        </Button>
      </form>
    </div>
  );
}
