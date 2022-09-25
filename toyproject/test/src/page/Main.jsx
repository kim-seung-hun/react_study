import { Header } from "../com";
import { Input, Atag, Btn } from "../comTag";
import React from "react";

const Main = (props) => {
  const styles = {
    marTop: {
      marginTop: "20px",
    },
  };

  const { login, isLoggedIn } = props;

  const onClickLogin = () => {
    login(true);
  };

  const onClickLogOut = () => {
    login(false);
  };

  return (
    <div className="main">
      <Header />
      <div className="body" style={styles.marTop}>
        {isLoggedIn ? (
          <div className="myText">{props.user.userId} 님 My Page</div>
        ) : (
          <Input inputTxt={"ID"} />
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
