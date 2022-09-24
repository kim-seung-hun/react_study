import React from "react";
import { Input, Btn } from "../comTag";
import { useNavigate } from "react-router-dom";

const JoinBody = ({ inputTxt, text }) => {
  const nav = useNavigate();
  return (
    <div className="body">
      <Input inputTxt={inputTxt} />
      <Input inputTxt="이름" />
      <div className="btn">
        <button
          onClick={() => {
            nav("/");
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinBody;
