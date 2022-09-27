import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Board = (props) => {
  const { logId, onChangeContent, resistContent, contents, setContent } = props;

  const [write, setWrite] = useState("");

  const styles = {
    margin: {
      margin: "50px auto",
    },
    contents: {
      color: "white",
      margin: "20px",
    },
    flex: {
      display: "flex",
    },
    width30: {
      width: "30%",
      marginTop: "10px",
    },
    width70: {
      width: "70%",
      marginTop: "10px",
    },
  };

  const nav = useNavigate();

  const onChangeHandle = useCallback(
    (e) => {
      setWrite(e.target.value);
    },
    [write]
  );

  const setCont = useCallback(() => {
    setContent((current) => {
      const newContent = { ...current };
      newContent.write = write;
      return newContent;
    });
  }, [write]);

  console.log(write);

  const contentList = contents.map((v, index) => (
    <div style={styles.flex} key={index}>
      <div style={styles.width30}>{v.writeId}</div>
      <div style={styles.width70}>{v.write}</div>
    </div>
  ));

  return (
    <div className="main">
      <div className="board">
        <div className="boardTitle">Board</div>
        <div className="boardContent">
          <div className="conTitle">
            <div className="cont1">작성자</div>
            <div className="cont2">내용</div>
          </div>
          <div style={styles.contents}>{contentList}</div>
          <div className="send">
            <div className="sendcont1">{logId} 님</div>
            <input
              name="write"
              className="sendcont2"
              placeholder="내용 입력해주세요"
              onChange={onChangeHandle}
            />
            <button
              className="sendcont3"
              onClick={() => {
                setCont();
                resistContent();
              }}
            >
              전송
            </button>
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
