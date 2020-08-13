import React from "react";
import "./../Button/Button.scss";

const ButtonUp = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Go To Up
    </button>
  );
};

export default ButtonUp;
