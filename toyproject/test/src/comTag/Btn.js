import React from "react";
import { useNavigate } from "react-router-dom";

const Btn = ({ text, pathBtn, onClickLogin }) => {
  const nav = useNavigate();
  return (
    <div className="btn">
      <button onClick={onClickLogin}>{text}</button>
    </div>
  );
};

export default Btn;
