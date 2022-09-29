import "./App.css";
import { useState } from "react";
import { Count, CountView } from "./com";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountView count={count} />
      <Count setCount={setCount} count={count} />
    </div>
  );
}

export default App;
