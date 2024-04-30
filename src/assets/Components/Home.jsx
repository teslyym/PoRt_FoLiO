import React, { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import { Link } from "react-router-dom";
import CustomButton from "./Buttons/CustomButton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="items-center  max-w-[1000px] mx-auto justify-center">
            <div className="fixed  m-auto text-[10rem] font-bold font-nunito opacity-5 top-0 left-[-2em] z-[-1000]">
              TESLIM
            </div>
            <div className="fixed pt-4  m-auto text-[27rem] font-bold font-nunito opacity-5 overflow-hidden bottom-[0em] right-[-1em] z-[-1000]">
              TESLIM
            </div>
            <div className="fixed inset-0 m-auto text-[2rem] font-bold font-nunito opacity-5 bottom-[0] left-0  z-[-1000]">
              TESLIM
            </div>
            <div className="p-5 gap-4">
              <Link to={"/"}>
                <h1 className=" font-poppins font-bold text-[2rem] ">Teslim</h1>
                <h2 className="font-poppins font-bold text-[1rem]">
                  Software Engineer
                </h2>
              </Link>
            </div>

            <div className="w-[450px] pt-[3rem] mb-[1rem]">
              <h1 className="font-poppins text-[13px] font-normal">
                I'm a Full Stack Web Developer from Nigeria. I'm passionate
                about crafting smooth, visually appealing, and innovative
                websites. With expertise in various programming languages,
                especially web technologies, I'm currently open for new
                opportunities.
              </h1>

              <div className="mt-4">
                <button className="border-2 border-[#333] border-solid text-[#000] shadow-none px-6 py-1 transition-all duration-300 hover:bg-[#000], font-[1em], bg-[grey]">
                  <a
                    className=" font-poppins"
                    href="mailto:steslimolayiwola@gmail.com"
                  >
                    Get in Touch
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
