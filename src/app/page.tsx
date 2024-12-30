import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(/images/bg.avif)" }}
    >
      <div className="h-screen  justify-center items-center flex flex-col ">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-5">
          Driving Tomorrow’s Tech Today.
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-6xl font-bold mb-5 px-4 text-center">
          Stay Ahead with the Latest Innovations
        </h2>
        <p className="mb-5 px-4 text-center lg:text-justify">
          Dive deep into the realm of groundbreaking technology, discover
          thought-provoking articles, and keep pace with the trends that are
          transforming the future.
        </p>
        <Link
          href="/blog"
          className="bg-secondary p-2  rounded-md hover:bg-white hover:text-black hover:border-secondary hover-border-3 transition-transform hover:scale-90 "
        >
          Explore Blog Posts
        </Link>
      </div>
    </main>
  );
}
