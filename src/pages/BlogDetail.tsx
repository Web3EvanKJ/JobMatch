import { useParams } from "react-router";
import { blogs } from "../data/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (blog?.markdownFile) {
      fetch(blog.markdownFile)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [blog]);

  if (!blog) {
    return <p className="p-6">Blog not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 prose">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.excerpt}</p>

      {/* Render Markdown content */}
      {content ? (
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto my-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      ) : (
        <p>Loading content...</p>
      )}
    </div>
  );
}
