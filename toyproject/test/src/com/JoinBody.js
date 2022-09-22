import React from "react";
import { Input, Btn } from "../comTag";

const JoinBody = ({ inputTxt, text }) => {
  return (
    <div className="body">
      <Input inputTxt={inputTxt} />
      <Input inputTxt="이름" />
      <Btn text={text} pathBtn="/" />
    </div>
  );
};

export default JoinBody;
