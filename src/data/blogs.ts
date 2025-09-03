export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  markdownFile: string; // path to markdown file
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "How to Land Your First Developer Job",
    excerpt: "Tips and strategies to break into the tech industry...",
    markdownFile: "/assets/blogs/blog1.md",
  },
  {
    id: "2",
    title: "Why TypeScript is a Game Changer",
    excerpt: "Discover the benefits of TypeScript for large-scale apps...",
    markdownFile: "/assets/blogs/blog2.md",
  },
  {
    id: "3",
    title: "Mastering React in 2025",
    excerpt:
      "A complete guide to the latest React features and best practices...",
    markdownFile: "/assets/blogs/blog3.md",
  },
  {
    id: "4",
    title: "Full-Stack Development with Vite & React",
    excerpt: "Build lightning-fast full-stack apps using modern tools...",
    markdownFile: "/assets/blogs/blog4.md",
  },
  {
    id: "5",
    title: "Web3 for Beginners",
    excerpt: "An introduction to blockchain, smart contracts, and dApps...",
    markdownFile: "/assets/blogs/blog5.md",
  },
];
