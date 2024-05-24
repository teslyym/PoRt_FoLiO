import React from "react";
import Header from "./Loader/Header";
import Background from "./Background";
import Apple from "../../assets/Apple.png";
import FaithFund from "../../assets/FaithFund.png";
import Diginote from "../../assets/Diginote.png";
import Portfolio from "../../assets/Portfolio.png";

const Projects = () => {
  return (
    <div className="items-center  max-w-[1000px] mx-auto justify-center">
      <div>
        <Header />
        <Background />
        <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[500px]">
          <div>
            <div className="flex justify-around px-5 py-5 gap-5">
              <div className="w-1/2">
                <a
                  href="https://apple-website-ashy.vercel.app/"
                  className="font-poppins font-bold"
                >
                  Apple Homepage
                </a>

                <h1 className="font-roboto font-normal ">
                  - a cloned landing page of apple websites
                </h1>
                <div className="pt-[30%]">
                  <h1 className="font-roboto font-normal text-xs">HTML</h1>
                  <h1 className="font-roboto font-normal text-xs">CSS</h1>
                  <h1 className="font-roboto font-normal text-xs">
                    JAVASCRIPT
                  </h1>
                  <h1 className="font-roboto font-normal text-xs">REACT</h1>
                </div>
              </div>
              <div className="w-[50%]">
                <img className="" src={Apple} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[500px]">
          <div>
            <div className="flex justify-around px-5 py-5 gap-5">
              <div className="w-1/2">
                <a
                  href="https://faith-fund.vercel.app/"
                  className="font-poppins font-bold"
                >
                  Faith-Fund
                </a>

                <h1 className="font-roboto font-normal ">
                  - a non-profit Islamic organization dedicated to restoring and
                  renovating mosques in Nigeria.
                </h1>
                <div className="pt-[30%]">
                  <h1 className="font-roboto font-normal text-xs">NodeJS</h1>
                  <h1 className="font-roboto font-normal text-xs">Express</h1>
                  <h1 className="font-roboto font-normal text-xs">React</h1>
                  <h1 className="font-roboto font-normal text-xs">MongoDB</h1>
                </div>
              </div>
              <div className="w-[50%]">
                <img className="" src={FaithFund} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[500px]">
          <div>
            <div className="flex justify-around px-5 py-5 gap-5">
              <div className="w-1/2">
                <a
                  href="https://faith-fund.vercel.app/"
                  className="font-poppins font-bold"
                >
                  Digi-Note
                </a>

                <h1 className="font-roboto font-normal ">
                  - a digital note app that can be assessed anytime.
                </h1>
                <div className="pt-[30%]">
                  <h1 className="font-roboto font-normal text-xs">NodeJS</h1>
                  <h1 className="font-roboto font-normal text-xs">Express</h1>
                  <h1 className="font-roboto font-normal text-xs">React</h1>
                  <h1 className="font-roboto font-normal text-xs">MongoDB</h1>
                </div>
              </div>
              <div className="w-[50%]">
                <img className="" src={Diginote} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[500px]">
          <div>
            <div className="flex justify-around px-5 py-5 gap-5">
              <div className="w-1/2">
                <a
                  href="https://faith-fund.vercel.app/"
                  className="font-poppins font-bold"
                >
                  Teslim
                </a>

                <h1 className="font-roboto font-normal ">
                  - my portfolio showcasing my works, expertise, skills and
                  experience
                </h1>
                <div className="pt-[30%]">
                  {/* <h1 className="font-roboto font-normal text-xs">NodeJS</h1>
                  <h1 className="font-roboto font-normal text-xs">Express</h1> */}
                  <h1 className="font-roboto font-normal text-xs">React</h1>
                  {/* <h1 className="font-roboto font-normal text-xs">MongoDB</h1> */}
                </div>
              </div>
              <div className="w-[50%]">
                <img className="" src={Portfolio} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
