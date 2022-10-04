import React from "react";
import { Header, Body } from "../com";

const Login = ({ login, islogin }) => {
  const setLogin = () => {
    login(true);
  };
  return (
    <div>
      <Header title={"로그인페이지"} />
      <Body path={"/shop"} name="상점페이지" islogin={islogin} />
      <Body path={"/mypage"} name="마이페이지" islogin={islogin} />
      <button onClick={setLogin}>로그인</button>
    </div>
  );
};

export default Login;
