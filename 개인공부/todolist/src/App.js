import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };

  // state를 직접 수정하면 안되기 때문에 배열에 push 메서드는 사용하면 안된다

  const onSubmit = (e) => {
    // form의 submit 안에 버튼을 클릭하면 새로고침 되기때문에 e.preventDefault() 실행
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  console.log(toDos);
  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* map은 배열의 모든 index에서 함수를 실행시키는 메서드 => 실행된 함수의 return 값은 new Array에 들어감 */}
      {/* map을 사요할땐 같은 컴포넌트의 리스트를 render 할땐 key라는 prop을 넣어줘야한다. */}
      <ul>
        {toDos.map((item, index) => {
          // new Array가 된다.
          <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
