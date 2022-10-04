import "./App.css";
import { Count, CountView } from "./com";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountView />
      <Count />
    </div>
  );
}

export default App;
