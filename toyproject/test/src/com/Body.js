import React from "react";
import { Input, Atag, Btn } from "../comTag";

const Body = ({ path, text, inputTxt }) => {
  return (
    <div className="body">
      <Input inputTxt={inputTxt} />
      <div className="linkPos">
        <Atag path={path} txt="회원가입" />
      </div>
      <Btn text={text} pathBtn="/mypage" />
    </div>
  );
};

export default Body;
