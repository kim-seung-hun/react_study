import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./page";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
