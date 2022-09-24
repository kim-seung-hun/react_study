import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Join, Board } from "./page";

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const Redirect = () => {
    return isLoggedIn == true ? (
      <Board isLoggedIn={isLoggedIn} />
    ) : (
      <Navigate to={"/"} />
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Main login={setLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/join" element={<Join />} />
        <Route path="/board" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
