import { Button } from "./Button";
import styles from "./App.module.css";
import btnStyles from "./Button.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log("i run all the time");

  // 가끔은 내 컴포넌트 내부에 몇몇은 re-render 할 필요 없는 경우가 있다.
  // 특정 코드의 실행을 제한하는 방법을 알아보자

  // 처음 한번만 실행!!!!!!!!!
  // 해당 keyword가 변할때만 실행!!!!!!!! >> 조건을 넣어줄수도 있음
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Serch for", keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        />
      </div>
      <h1 className={styles.title}>{counter}</h1>
      <button className={btnStyles.btn} onClick={onClick}>
        ADD
      </button>
      {/* <Button onClick={onClick} text={"Continue"} /> */}
    </div>
  );
}

export default App;
