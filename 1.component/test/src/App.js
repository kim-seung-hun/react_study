import "./App.css";
import Mycom from "./components/Mycom";

function App() {
  return (
    <div className="App">
      <Mycom name="첫째" age="29" Cname="one" />
      <Mycom name="둘째" age="28" Cname="two" />
      <Mycom name="셋째" age="23" Cname="three" />
    </div>
  );
}

export default App;
