import React from "react";
import Header from "./Loader/Header";
import Background from "./Background";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="items-center  max-w-[1000px] mx-auto justify-center ">
      <div className="">
        <div className="flex justify-between items-center">
          <Header />
          <Navbar />
        </div>
        <Background />
        <div className="w-[700px] pt-[2rem] mb-[1rem] p-5 gap-4">
          <h1 className="font-poppins font-bold leading-7 text--2xl">
            About Me
          </h1>
          <p className="font-poppins text-[13px] font-normal leading-6 text-base pt-[3%]">
            I'm a Full Stack Web Developer based in Nigeria, with a deep passion
            for crafting seamless, beautiful, and innovative web apps. I have a
            strong foundation in various programming languages, especially web
            technologies. Continuous learning drives me, making my work more
            rigorous. I write code because I love turning the impossible into
            possible, fueled by curiosity, creativity, and a desire to learn
            more.
          </p>
        </div>
      </div>
      <div className="mt-4 p-5 gap-4">
        <button className="border-2 border-[#333] border-solid text-[#000]  shadow-none px-6 py-1 transition-all duration-300 hover:bg-[#000], font-[1em], bg-[#d5d5d5]">
          <a className=" font-poppins" href="mailto:steslimolayiwola@gmail.com">
            Hire me
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
