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

  const [logId, setLogId] = useState("");

  const [content, setContent] = useState({
    writeId: "",
    write: "",
  });

  const [contents, setContents] = useState([]);

  console.log(contents);
  // console.log(user);

  ////////////////////////////////////////////////////////////////

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

  const isUser = (element) => {
    if (element.userId === user.userId) {
      return true;
    }
  };
  const joinUser = useCallback(() => {
    if (users.find(isUser)) {
      alert("이미 존재하는 아이디입니다.");
    } else {
      alert(`아이디 : ${user.userId} , 이름 : ${user.userName}`);
      setUsers((currentArray) => [...currentArray, user]);
      nav("/");
    }
  }, [user, users]);

  const resistContent = useCallback(() => {
    setContents((currentArray) => [...currentArray, content]);
  }, [content, contents]);

  ////////////////////////////////////////////////////////////////////

  const [isLoggedIn, setLogin] = useState(false);

  const Redirect = () => {
    return isLoggedIn == true ? (
      <Board
        isLoggedIn={isLoggedIn}
        logId={logId}
        setContent={setContent}
        content={content}
        contents={contents}
        resistContent={resistContent}
      />
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
              logId={logId}
              setLogId={setLogId}
              setContent={setContent}
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
