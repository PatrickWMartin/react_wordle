import { useState } from "react";
import GuessRow from "./components/GuessRow";
import LetterKey from "./components/LetterKey";
import Backspace from "./components/Backspace";
import EnterKey from "./components/EnterKey";

function App() {
  const [solution, setSolution] = useState('react');
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");

  const letterClick = (letter) =>{
    if(currentGuess.length < 5){
      setCurrentGuess(currentGuess+letter);
    }
  };

  const deleteLetter = () => {
    setCurrentGuess(currentGuess.slice(0,-1));
  }

  return (
    <div>
    <div style={{display:'flex',flexDirection: 'column', alignItems: "center"}}>
      <div>
        <h1>React Wordle!</h1>
        <p>Current Guess: {currentGuess}</p>
      </div>
      <div>
        <GuessRow letter1={''} letter2={''} letter3={''} letter4={''} letter5={''} />
        <GuessRow letter1={''} letter2={''} letter3={''} letter4={''} letter5={''}/>
        <GuessRow letter1={''} letter2={''} letter3={''} letter4={''} letter5={''}/>
        <GuessRow letter1={''} letter2={''} letter3={''} letter4={''} letter5={''}/>
        <GuessRow letter1={''} letter2={''} letter3={''} letter4={''} letter5={''}/>
      </div>
      <div style={{display:'flex'}}>
        <LetterKey onClick={letterClick} letter={'Q'}/>
        <LetterKey onClick={letterClick} letter={'W'}/>
        <LetterKey onClick={letterClick} letter={'E'}/>
        <LetterKey onClick={letterClick} letter={'R'}/>
        <LetterKey onClick={letterClick} letter={'T'}/>
        <LetterKey onClick={letterClick} letter={'Y'}/>
        <LetterKey onClick={letterClick} letter={'U'}/>
        <LetterKey onClick={letterClick} letter={'I'}/>
        <LetterKey onClick={letterClick} letter={'O'}/>
        <LetterKey onClick={letterClick} letter={'P'}/>
      </div>
      <div style={{display:'flex'}}>
        <LetterKey onClick={letterClick} letter={'A'}/>
        <LetterKey onClick={letterClick} letter={'S'}/>
        <LetterKey onClick={letterClick} letter={'D'}/>
        <LetterKey onClick={letterClick} letter={'F'}/>
        <LetterKey onClick={letterClick} letter={'G'}/>
        <LetterKey onClick={letterClick} letter={'H'}/>
        <LetterKey onClick={letterClick} letter={'J'}/>
        <LetterKey onClick={letterClick} letter={'K'}/>
        <LetterKey onClick={letterClick} letter={'L'}/>
      </div>
      <div style={{display:'flex'}}>
        <EnterKey />
        <LetterKey onClick={letterClick} letter={'Z'}/>
        <LetterKey onClick={letterClick} letter={'X'}/>
        <LetterKey onClick={letterClick} letter={'C'}/>
        <LetterKey onClick={letterClick} letter={'V'}/>
        <LetterKey onClick={letterClick} letter={'B'}/>
        <LetterKey onClick={letterClick} letter={'N'}/>
        <LetterKey onClick={letterClick} letter={'M'}/>
        <Backspace deleteLetterHandler={deleteLetter}/>
      </div>
    </div>
      </div>
  );
}

export default App;
