import React, { useState } from "react";
import { Header, Body } from "../com";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="main">
      <Header />
      <Body
        inputTxt="ID"
        path="/join"
        text="login"
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogOut={onClickLogOut}
      />
    </div>
  );
};

export default Main;
