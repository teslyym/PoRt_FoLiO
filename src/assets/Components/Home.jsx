import React, { useEffect, useState, useRef } from "react";
import Loader from "./Loader/Loader";
import { Link } from "react-router-dom";
import CustomButton from "./Buttons/CustomButton";
import Background from "./Background";
import Navbar from "./Navbar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [pageSteps, setPageSteps] = useState("home");

  switch (pageSteps) {
    case "home":
      return (
        <>
          <div className="">
            {isLoading ? (
              <Loader />
            ) : (
              <div className="items-center  max-w-[1000px] mx-auto justify-center">
                <Background />
                <div className="p-5 gap-4">
                  <Link to={"/"}>
                    <h1 className=" font-poppins font-bold text-[2rem] transition duration-75 ease-out text-[#111]">
                      Teslim
                    </h1>
                    <h2 className="font-poppins font-bold text-[1rem]">
                      Software Engineer
                    </h2>
                  </Link>
                </div>

                <div className="w-[450px] pt-[3rem] mb-[1rem] p-5 gap-4">
                  <h1 className="font-poppins text-[13px] font-normal">
                    I'm a Full Stack Web Developer from Nigeria. I'm passionate
                    about crafting smooth, visually appealing, and innovative
                    websites. With expertise in various programming languages,
                    especially web technologies, I'm currently open for new
                    opportunities.
                  </h1>

                  <div className="mt-4 p-5 gap-4">
                    <button className="border-2 border-[#333] border-solid text-[#000] shadow-none px-6 py-1 transition-all duration-300 hover:bg-[#000], font-[1em], bg-[#d5d5d5]">
                      <a
                        className=" font-poppins"
                        href="mailto:steslimolayiwola@gmail.com"
                      >
                        Get in Touch
                      </a>
                    </button>
                  </div>
                </div>
                <Navbar />
              </div>
            )}
          </div>
        </>
      );
    case "about":
      return <About setPageSteps={setPageSteps} />;
    default:
      break;
  }
};

export default Home;
