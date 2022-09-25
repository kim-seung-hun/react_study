import { Header } from "../com";
import { Input, Atag, Btn } from "../comTag";
import React, { useState } from "react";

const Main = (props) => {
  const styles = {
    marTop: {
      marginTop: "20px",
    },
  };

  const { login, isLoggedIn } = props;

  const [logId, setLogId] = useState("");

  const onChangeId = (e) => {
    setLogId(e.target.value);
  };

  const isId = (element) => {
    if (element.userId === logId) {
      return true;
    }
  };

  const onClickLogin = () => {
    if (props.users.find(isId)) {
      login(true);
    } else {
      alert("아이디를 확인해주세요");
    }
  };

  const onClickLogOut = () => {
    login(false);
  };

  return (
    <div className="main">
      <Header />
      <div className="body" style={styles.marTop}>
        {isLoggedIn ? (
          <div className="myText">{logId} 님 My Page</div>
        ) : (
          <div className="logInput">
            <input value={logId} onChange={onChangeId} placeholder="ID" />
          </div>
        )}

        {isLoggedIn ? (
          <div className="linkPos">
            <Atag txt="로그아웃" onClickLogOut={onClickLogOut} />
          </div>
        ) : (
          <div className="linkPos">
            <Atag path={"/join"} txt="회원가입" />
          </div>
        )}

        {isLoggedIn ? (
          <div className="btnPos">
            <Btn
              isLoggedIn={isLoggedIn}
              pathBtn="/board"
              text="게시판 이동"
              onClickLogin={onClickLogin}
            />
          </div>
        ) : (
          <Btn text={"Login"} onClickLogin={onClickLogin} />
        )}
      </div>
    </div>
  );
};

export default Main;
