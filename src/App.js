import { useState } from "react";
import GuessRow from "./components/GuessRow";
function App() {
  const [solution, setSolution] = useState('react');
  return (
    <div style={{display:'flex',flexDirection: 'column', alignItems: "center"}}>
      <div>
        <h1>React Wordle</h1>
      </div>
      <div>
        <GuessRow />
        <GuessRow />
        <GuessRow />
        <GuessRow />
        <GuessRow />
        <GuessRow />
      </div>
    </div>
  );
}

export default App;
