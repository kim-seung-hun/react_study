import React from "react";
import { Link } from "react-router-dom";

const Atag = ({ path, txt }) => {
  return (
    <div className="atag">
      <Link to={path}>{txt}</Link>
    </div>
  );
};

export default Atag;
