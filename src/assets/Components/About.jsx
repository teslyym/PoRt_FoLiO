import React from "react";
import Header from "./Loader/Header";

const About = () => {
  return (
    <div>
      <div ref={sectionRef}>
        <Header />
        <h1>About Me</h1>
        <p>
          I'm a Full Stack Web Developer based in Nigeria, with a deep passion
          for crafting seamless, beautiful, and innovative websites. I have a
          strong foundation in various programming languages, especially web
          technologies. Continuous learning drives me, making my work more
          rigorous. I write code because I love turning the impossible into
          possible, fueled by curiosity, creativity, and a desire to learn more.
        </p>
      </div>
      <div className="mt-4">
        <button className="border-2 border-[#333] border-solid text-[#000] shadow-none px-6 py-1 transition-all duration-300 hover:bg-[#000], font-[1em], bg-[#d5d5d5]">
          <a className=" font-poppins" href="mailto:steslimolayiwola@gmail.com">
            Hire me
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
