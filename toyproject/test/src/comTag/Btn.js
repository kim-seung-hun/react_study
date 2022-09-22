import React from "react";
import { useNavigate } from "react-router-dom";

const Btn = ({ text, pathBtn }) => {
  const nav = useNavigate();
  return (
    <div className="btn">
      <button
        onClick={() => {
          nav(pathBtn);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Btn;
