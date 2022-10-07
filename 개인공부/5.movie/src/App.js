// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year

// 리액트 라우터 설치 명령어 npm i react-router-dom

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
