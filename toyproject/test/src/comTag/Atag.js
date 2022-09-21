import React from "react";
import { Link } from "react-router-dom";

const Atag = (path) => {
  return (
    <div className="atag">
      <Link to={path}>회원가입</Link>
    </div>
  );
};

export default Atag;
