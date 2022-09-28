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
      margin: "15px",
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

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setStart((currentPage - 1) * 15);
    setEnd(currentPage * 15);
  }, [currentPage]);

  const pageNum = [];
  for (let i = 1; i < Math.ceil(contents?.length / 15); i++) {
    pageNum.push(i);
  }

  const contentList = contents?.slice(start, end).map((v, index) => (
    <div style={styles.flex} key={index}>
      <div style={styles.width30}>{v.writeId}</div>
      <div style={styles.width70}>{v.write}</div>
    </div>
  ));

  const onChangeHandle = useCallback(
    (e) => {
      setWrite(e.target.value);
    },
    [write]
  );

  const pagination = (
    <nav
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        color: "white",
        position: "absolute",
        width: "100%",
        bottom: "85px",
      }}
    >
      {pageNum.map((num) => {
        return (
          <li
            style={{
              margin: "5px",
            }}
            key={num}
          >
            <button
              style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "#fa6ee3",
                backgroundColor: "black",
                borderStyle: "none",
                cursor: "grab",
              }}
              onClick={() => {
                setCurrentPage(num);
              }}
            >
              {num}
            </button>
          </li>
        );
      })}
    </nav>
  );

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
          {pagination}
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
                setContent((current) => {
                  const newContent = { ...current };
                  newContent.write = write;
                  return newContent;
                });
              }}
            >
              등록
            </button>
            <button
              className="sendcont3"
              onClick={() => {
                resistContent();
              }}
            >
              올리기
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
