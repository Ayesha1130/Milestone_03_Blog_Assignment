import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center p-5 md:p-10 bg-black ">
      <h1 className="text-5xl md:text-6xl animate-bounce font-rubik font-bold  ">
        About Me
      </h1>

      <div className=" w-full md:w-full lg:w-full ">
        <div
          className=" border border-20 p-6 md:p-8 lg:p-10 rounded-lg bg-background  "
          data-aos="flip-up"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-rubik">
            My Evolution as a Developer
          </h1>
          <p className="mb-4 md:mb-5 lg:mb-6  ">
            My path as a front-end developer started nearly two years ago,
            transitioning from a web design background. During this time, I have
            developed a solid skill set in both front-end and back-end
            development, gaining proficiency in a variety of technologies and
            tools. I now specialize in creating intuitive, user-friendly
            interfaces and developing scalable, efficient server-side solutions.
          </p>
          <p className="mb-4 md:mb-5 lg:mb-6 ">
            Currently, I am enhancing my expertise through a specialized course
            in artificial intelligence. This focus reflects my dedication to
            remaining at the forefront of technological advancements and my
            enthusiasm for exploring the connections between AI and software
            development. My aim is to utilize my diverse skills and experiences
            to contribute to impactful projects and drive innovation in the tech
            industry.
          </p>
        </div>
       
        <div
          className="border border-20 p-10 rounded-lg mt-10 bg-background"
          data-aos="flip-up"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-rubik">
            My Values and Beliefs
          </h1>
          <p className="mb-4 md:mb-5 lg:mb-6  md:text-justify text-center ">
            I believe that technology, when used responsibly and with purpose,
            can significantly improve our lives. I am committed to creating a
            world where everyone has access to the best tools, resources, and
            opportunities for personal and professional growth. My values and
            beliefs include:
          </p>
          <ul className="list-disc ml-4">
            <li className="mb-2 md:mb-4">Empowerment and inclusivity</li>
            <li className="mb-2 md:mb-4">
              Respect for all individuals and their rights
            </li>
            <li className="mb-2 md:mb-4">Transparency</li>
          </ul>
        </div>
          
        <div
          className="border border-20 p-10 rounded-lg mt-10 bg-background"
          data-aos="flip-up"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 font-rubik">
            Let’s Build Something Incredible
          </h1>
          <p className="mb-4 md:mb-5 lg:mb-6 md:text-justify text-center ">
            Are you prepared to transform your vision into reality? If you’re
            considering a new web project, I’m eager to work together. Let’s
            explore your ideas and make them truly extraordinary.
          </p>
          <Link
            href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
            target="-blank"
            className="p-4 bg-secondary rounded-lg"
          >
            {" "}
            Lets Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;