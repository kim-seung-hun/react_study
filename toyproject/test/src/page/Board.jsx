import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Board = (props) => {
  const { logId, resistContent, contents, setContent, setContents } = props;

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
      width: "50%",
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

  const onRemove = (e) => {
    contents.splice(Number(e.target.className), 1);
    alert("삭제되었습니다");
    nav("/board");
  };

  console.log(contents);

  const contentList = contents?.slice(start, end).map((v, index) => (
    <div style={styles.flex} key={index}>
      <div style={styles.width30}>{v.writeId}</div>
      <div style={styles.width70}>{v.write}</div>
      {v.writeId == logId ? (
        <div style={{ width: "20%" }}>
          <button
            style={{
              backgroundColor: "black",
              color: "#fa6ee3",
              borderStyle: "none",
              width: "40px",
              marginTop: "13px",
              fontWeight: "900",
              cursor: "grab",
            }}
            className={index}
            onClick={onRemove}
          >
            {"[삭제]"}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  ));

  const contentListManager = contents?.slice(start, end).map((v, index) => (
    <div style={styles.flex} key={index}>
      <div style={styles.width30}>{v.writeId}</div>
      <div style={styles.width70}>{v.write}</div>
      <div style={{ width: "20%" }}>
        <button
          style={{
            backgroundColor: "#fa6ee3",
            color: "black",
            borderStyle: "none",
            width: "15px",
            marginTop: "10px",
            fontWeight: "900",
          }}
          className={index}
          onClick={onRemove}
        >
          X
        </button>
      </div>
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
            <div className="cont1" style={{ width: "30%" }}>
              작성자
            </div>
            <div className="cont2" style={{ width: "50%" }}>
              내용
            </div>
            <div style={{ width: "20%" }}></div>
          </div>
          {logId == "manager" ? (
            <div style={styles.contents}>{contentListManager}</div>
          ) : (
            <div style={styles.contents}>{contentList}</div>
          )}
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
                alert("등록되었습니다");
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
