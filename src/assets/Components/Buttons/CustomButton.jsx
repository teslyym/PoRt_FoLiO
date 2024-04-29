import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, button_width, handleClick }) => {
  return (
    <div>
      <div
        onClick={handleClick}
        className={`button`}
        style={{
          width: button_width,
        }}
      ></div>
      <div>{text}</div>
    </div>
  );
};

export default CustomButton;
