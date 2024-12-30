import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center p-5 md:p-10 bg-black ">
      <div className=" w-full md:w-2/5 lg:w-3/4 border border-20 p-6 md:p-8 lg:p-10 rounded-2xl bg-background  "  data-aos="flip-up">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-rubik">
          Let’s Collaborate on Your Next Venture
        </h2>
        <p className="text-center md:text-justify">
          Do you have a question or want to collaborate on something new?
          Whether you're curious about emerging technologies, seeking advice on
          your current projects, or simply looking to connect, I’m here for you.
          Don’t hesitate to reach out so we can explore exciting opportunities
          to work together!
        </p>
        <div className="flex flex-col items-center justify-center text-center">
          <button className="bg-secondary p-3 m-5 rounded-lg transition-transform transform hover:scale-105 ">
            Get In Touch
          </button>
        </div>

        <div className="flex flex-row gap-5 justify-center items-center mt-4">
          <Link
            href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
            target="-blank"
          >
            <FaLinkedin className="size-10 hover:text-[#1b1b68]  transition-transform transform hover:scale-105 " />
          </Link>
          <Link href="https://github.com/Ayesha1130" target="-blank">
            <FaGithub className="size-10 hover:text-[#1b1b68]  transition-transform transform hover:scale-105 " />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;