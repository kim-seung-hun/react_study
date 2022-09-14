import "./App.css";
// App.css 파일가져온 구문

// import Mycom from "./components/Mycom";
import Calender from "./components/Calender";

function App() {
  return (
    <div className="App">
      {/* <Mycom name="첫째" age="29" Cname="one" />
      <Mycom name="둘째" age="28" Cname="two" />
      <Mycom name="셋째" age="23" Cname="three" /> */}
      <Calender />
    </div>
  );
}

export default App;
