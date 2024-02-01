import LetterKey from './LetterKey';

export default function KeyboardRow(){
  return (
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
  )
}
