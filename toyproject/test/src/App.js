import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Join, Board, Mypage } from "./page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/board" element={<Board />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
