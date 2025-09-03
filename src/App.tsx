import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobDetail from "./pages/JobDetail";
import Talent from "./pages/Talent";
import TalentDetail from "./pages/TalentDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Apply from "./pages/Apply";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/jobs/:id/apply" element={<Apply />} />
      <Route path="/talent" element={<Talent />} />
      <Route path="/talent/:id" element={<TalentDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
