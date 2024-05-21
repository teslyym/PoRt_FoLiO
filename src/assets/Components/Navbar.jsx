import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="pt-[10rem] flex gap-10">
          <button>
            <Link to={"/about"} handleClick={() => setPageSteps("about")}>
              <p className=" flex font-roboto w-[100px] justify-center font-light p-[5px]   border-[3px] border-[#ccc] shadow-sm shadow-[gray] whitespace-nowrap">
                About Me
              </p>
            </Link>
          </button>

          <button>
            <Link to={"/skills"}>
              <p className="flex font-roboto w-[100px] justify-center font-light p-[5px]   border-[3px] border-[#ccc] shadow-sm shadow-[gray] whitespace-nowrap">
                Skills
              </p>
            </Link>
          </button>

          <button>
            {" "}
            <Link to={"/projects"}>
              <p className=" flex font-roboto w-[100px] justify-center font-light p-[5px]   border-[3px] border-[#ccc] shadow-sm shadow-[gray] whitespace-nowrap">
                Projects
              </p>
            </Link>
          </button>
          <button>
            {" "}
            <Link>
              <p className=" font flex font-roboto w-[100px] justify-center font-light p-[5px]   border-[3px] border-[#ccc] shadow-sm shadow-[gray] whitespace-nowrap">
                Links
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
