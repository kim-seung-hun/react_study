import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Login, Shop, Detail, MyPage } from "./page";
import { useState } from "react";

function App() {
  // Routers : 페이지를 스위치 해주는 일을 해준다.
  // 버전업되면서 이름이 바뀌었다. (과거엔 Switch)

  // Route: 페이지들을 정의해준다. Route에는 props 값이 두개 필요한데
  // path , element
  // path는 컴포넌트들을 보여줄 경로
  // element는 보여줄 경로의 컴포넌트(path 경로에 해당되는 컴포넌트)

  // 로그인이 되었는지 확인할 useState
  const [login, setLogin] = useState(false);

  //페이지 접속할때 권한이 필요해서 막아야할떄 페이지 처리
  // 페이지를 보호하는법 리다이렉트 해주는 방법
  // Navigate라는 컴포넌트를 사용해서 리다이렉트하게 만들어줄수있다.
  // props를 받는데 to에 경로 작성
  // Redirect 컴포넌트를 만들어준것
  const Redirect = () => {
    return login == true ? <MyPage /> : <Navigate to="/" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main islogin={login} />} />
        <Route path="/login" element={<Login login={setLogin} />} />
        <Route path="/shop" element={<Shop islogin={login} />} />
        <Route
          path="/detail/:id/:num/:name"
          element={<Detail islogin={login} />}
        />
        <Route path="/mypage" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
