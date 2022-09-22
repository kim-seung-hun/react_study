import React from "react";
import { Header, Body } from "../com";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Body inputTxt="ID" path="/join" text="login" />
    </div>
  );
};

export default Main;
