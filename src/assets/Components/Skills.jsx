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
        </div>
      </div>
    </div>
  );
};

export default Skills;
