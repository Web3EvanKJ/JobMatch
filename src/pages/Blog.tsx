import { blogs } from "../data/blogs";
import { Link } from "react-router";

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border-b-2 pb-4">
            <Link to={`/blog/${blog.id}`}>
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
