import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
