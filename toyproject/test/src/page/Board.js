import React from "react";
import { Btn } from "../comTag";

const board = () => {
  return (
    <div className="main">
      <div className="board">
        <div className="boardTitle">Board</div>
        <div className="boardContent">
          <div className="conTitle">
            <div className="cont1">작성자</div>
            <div className="cont2">내용</div>
          </div>
          <div className="send">
            <div className="sendcont1">아이디 : </div>
            <input className="sendcont2" />
            <button className="sendcont3">전송</button>
          </div>
        </div>
        <div className="boardBtn">
          <Btn text="로그인페이지 이동" pathBtn="/" />
        </div>
      </div>
    </div>
  );
};

export default board;
