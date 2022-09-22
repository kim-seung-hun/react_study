import React from "react";
import { Header } from "../com";
import { Input, Atag, Btn } from "../comTag";

const Mypage = () => {
  return (
    <div className="main">
      <Header />
      <div className="myText">사용자 님 My Page</div>
      <Atag path="/" txt="로그아웃" />
      <div className="btnPos">
        <Btn pathBtn="/board" text="게시판 이동" />
      </div>
    </div>
  );
};

export default Mypage;
