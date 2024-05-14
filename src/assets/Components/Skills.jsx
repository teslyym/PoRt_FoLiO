import React from "react";
import Header from "./Loader/Header";
import Background from "./Background";

const Skills = () => {
  return (
    <div className="items-center  max-w-[1000px] mx-auto justify-center">
      <div>
        <Header />
        <Background />
        <div className=" pt-[2rem] mb-[1rem] p-5 gap-4">
          <h1 className="font-poppins font-bold text-2xl">Skills</h1>

          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-full">
            <div>
              <p className="font-poppins text-sm font-bold">
                Programming Languages
              </p>

              <h1>JavaScript</h1>
            </div>
            <div className=" bg-[gray] w-[1.5px]"></div>
            <div>
              <p className="font-poppins text-sm font-bold">Web Frontend</p>
              <h1 className="font-roboto text-sm font-normal">HTML</h1>
              <h1>CSS</h1>
              <h1>React</h1>
              <h1>Tailwind</h1>
              <h1>Sass</h1>
            </div>
            <div className=" bg-[gray] w-[1.5px]"></div>
            <div>
              <p className="font-poppins text-sm font-bold">Web Backend</p>
              <h1>Node</h1>
              <h1>Express</h1>
              <h1>Django</h1>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
