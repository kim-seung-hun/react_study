import { Routes, Route } from "react-router-dom";
import { Main, Shop } from "./page";
import { Header } from "./components";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  return (
    <div className="App">
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
