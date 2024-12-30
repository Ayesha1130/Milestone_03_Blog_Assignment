"use client";
import Link from "next/link";

import { useState } from "react";
import Card from "@/components/Card";

interface BlogType {
  id: number;
  title: string;
  description: string;
  image: string;
}
const Blogs: BlogType[] = [
  {
    id: 1,
    image: "/images/ts.png",
    title: "TypeScript: A Comprehensive Overview",
    description:
      "TypeScript is a powerful, statically-typed superset of JavaScript that helps developers write cleaner and more maintainable code. Created and maintained by Microsoft. ",
  },
  {
    id: 2,
    image: "/images/next.jpg",
    title: "Next.js: A React Framework for Building Blogs",
    description:
      "Next.js is a React framework that provides a seamless development experience for building server-rendered, statically-exported websites. ",
  },
  {
    id: 3,
    image: "/images/React.png",
    title: "React: A JavaScript Library for Building User Interfaces",
    description:
      "React is a popular JavaScript library for building user interfaces.",
  },
  {
    id: 4,

    image: "/images/graphql.png",
    title: "GraphQL: A Query Language for APIs",
    description:
      "GraphQL is a query language for APIs that provides a more efficient and flexible way to fetch and manipulate data. It is designed to be flexible, scalable, and easy to learn, making it a popular choice for building APIs and web applications.",
  },
  {
    id: 5,
    image: "/images/tailwind.png",
    title: "Tailwind CSS: A Utility-First CSS Framework",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides a wide range of built-in classes and utilities for building responsive and accessible websites.",
  },
  {
    id: 6,
    image: "/images/js.webp",
    title: "JavaScript: A Programming Language",
    description:
      "JavaScript is a powerful, interpreted programming language that allows developers to write code that runs in web browsers and on Node.js servers. ",
  },
  {
    id: 7,
    image: "/images/node.jpg",
    title: "Node.js: A Runtime Environment for JavaScript",
    description:
      "Node.js is a runtime environment for JavaScript that allows developers to write server-side applications using JavaScript.",
  },
  {
    id: 8,
    image: "/images/mdb.jpg",
    title: " MongoDB NoSQL Database",
    description:
      "MongoDB is a NoSQL database that provides a flexible and scalable solution for storing and retrieving data. It is designed to be highly available, fault-tolerant, and durable, making it a popular choice for building applications with a large amount of data.",
  },
  {
    id: 9,
    image: "/images/redux.png",
    title: "Redux: A Predictable State Management Library",
    description:
      "Redux is a predictable state management library for JavaScript applications that provides a flexible and modular way to manage application state. ",
  },
];
const Blog = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(6);

  const morePosts = () => {
    setFilteredBlogs((prev) => prev + 6);
  };

  return (
    <div className="bg-black">
      <div className="flex flex-col text-center h-[60vh] bg-contain bg-center justify-center items-center font-serif "
      style={{ backgroundImage: "url(/images/bg2.jpg)" }}>
        <h1 className="text-2xl md:3xl lg:text-6xl font-serif font-bold">Welcome To My Blog</h1>
        <p className="mt-4 text-lg">
          We're here to share the latest tech news, tutorials, and articles. Stay up-to-date with the latest advancements in the field and explore the world of programming!

        </p>
      </div>
      <div className="mx-10 p-4 gap-4">
        <h1 className="text-3xl my-10 md:text-4xl lg:text-5xl  font-serif font-semibold text-center">
          Tech Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 rounded-md mt-10 ">
          {Blogs.slice(0, filteredBlogs).map((blog) => (
            <div key={blog.id} className="">
              <Link href={`/blog/${blog.id}`}>
                <Card
                  id={blog.id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                />
              </Link>
            </div>
          ))}
        </div>

        {Blogs.length > filteredBlogs && (
          <div className="justify-center my-10 flex  ">
            <button
              onClick={morePosts}
              className=" bg-secondary py-4 px-10 rounded-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Blog;
