import React from "react";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const styles = {
    margin: {
      margin: "50px auto",
    },
  };

  const nav = useNavigate();

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
        <div style={styles.margin} className="btn">
          <button
            onClick={() => {
              nav("/");
            }}
          >
            마이페이지 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
