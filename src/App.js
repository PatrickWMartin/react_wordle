import { useState } from "react";
import GuessRow from "./components/GuessRow";
import LetterKey from "./components/LetterKey";
import Backspace from "./components/Backspace";
import EnterKey from "./components/EnterKey";
function App() {
  const [solution, setSolution] = useState('react');
  return (
    <div>
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
      <div style={{display:'flex'}}>
        <LetterKey letter={'Q'}/>
        <LetterKey letter={'W'}/>
        <LetterKey letter={'E'}/>
        <LetterKey letter={'R'}/>
        <LetterKey letter={'T'}/>
        <LetterKey letter={'Y'}/>
        <LetterKey letter={'U'}/>
        <LetterKey letter={'I'}/>
        <LetterKey letter={'O'}/>
        <LetterKey letter={'P'}/>
      </div>
      <div style={{display:'flex'}}>
        <LetterKey letter={'A'}/>
        <LetterKey letter={'S'}/>
        <LetterKey letter={'D'}/>
        <LetterKey letter={'F'}/>
        <LetterKey letter={'G'}/>
        <LetterKey letter={'H'}/>
        <LetterKey letter={'J'}/>
        <LetterKey letter={'K'}/>
        <LetterKey letter={'L'}/>
      </div>
      <div style={{display:'flex'}}>
        <EnterKey />
        <LetterKey letter={'Z'}/>
        <LetterKey letter={'X'}/>
        <LetterKey letter={'C'}/>
        <LetterKey letter={'V'}/>
        <LetterKey letter={'B'}/>
        <LetterKey letter={'N'}/>
        <LetterKey letter={'M'}/>
        <Backspace />
      </div>
    </div>
      </div>
  );
}

export default App;
