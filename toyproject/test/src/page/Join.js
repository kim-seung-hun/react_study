import React from "react";
import { Header, JoinBody } from "../com";

const Join = () => {
  return (
    <div className="main">
      <Header />
      <JoinBody inputTxt="사용할 아이디 입력" text="join" />
    </div>
  );
};

export default Join;
