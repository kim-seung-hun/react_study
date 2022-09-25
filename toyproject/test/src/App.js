import "./App.css";
import React, { useState, useCallback } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Main, Join, Board } from "./page";

function App() {
  const nav = useNavigate();

  const [user, setUser] = useState({
    userId: "",
    userName: "",
  });
  const [users, setUsers] = useState([]);

  const onChangeHandle = useCallback(
    (e) => {
      const { name, value } = e.target;

      setUser((current) => {
        const newUser = { ...current };
        newUser[name] = value;
        return newUser;
      });
    },
    [user]
  );

  const joinUser = useCallback(() => {
    alert(`아이디 : ${user.userId} , 이름 : ${user.userName}`);
    setUsers((currentArray) => [...currentArray, user]);
    nav("/");
  }, [user]);

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
          element={
            <Main
              user={user}
              users={users}
              login={setLogin}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/join"
          element={
            <Join
              user={user}
              joinUser={joinUser}
              onChangeHandle={onChangeHandle}
            />
          }
        />
        <Route path="/board" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
