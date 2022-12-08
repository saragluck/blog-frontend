import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 57)}>count is {count}</button>
        <p>
          MODIFY <code>src/App.jsx</code> and SAVE to test HMR
        </p>
      </div>
      <p className="read-the-docs">Fun Game - press until you get one million</p>
    </div>
  );
}

export default App;
