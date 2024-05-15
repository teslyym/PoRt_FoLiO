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

          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify w-full">
            <div>
              <p className="font-poppins text-sm font-bold">
                Programming Languages
              </p>
              <div>
                <div className="flex items-center gap-2">
                  <svg className="w-[20px]" viewBox="0 0 128 128">
                    <path
                      fill="#aaaaaa"
                      d="M1.408 1.408h125.184v125.185H1.408z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    ></path>
                  </svg>
                  <h1 className="font-roboto text-sm font-normal">
                    JavaScript
                  </h1>
                </div>
              </div>
            </div>
            <div className=" bg-[gray] w-[1.5px]"></div>
            <div>
              <p className="font-poppins text-sm font-bold">Web Frontend</p>
              <div>
                <div className="flex items-center gap-2">
                  <svg className="w-[20px]" viewBox="0 0 128 128">
                    <path
                      fill="gray"
                      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                    ></path>
                    <path
                      fill="gray"
                      d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                    ></path>
                  </svg>
                  <h1 className="font-roboto text-sm font-normal">HTML</h1>
                </div>
              </div>
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
