import React from "react";
import Header from "./Loader/Header";
import Background from "./Background";

const Skills = () => {
  return (
    <div className="items-center  max-w-[1000px] mx-auto justify-center">
      <div>
        <Header />
        <Background />
        <div className="w-[700px] pt-[2rem] mb-[1rem] p-5 gap-4">
          <h1 className="font-poppins font-bold text-2xl">Skills</h1>

          <div className="flex gap-5 border border-solid justify-around w-[800px]">
            <div>
              <p>Programming Languages</p>
            </div>
            <div className=" bg-[gray] w-[1.5px]"></div>
            <div>
              <p>Web Frontend</p>
            </div>

            <div>
              <p>Web Backend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
