import GuessRow from "./GuessRow";

export default function GuessGrid({ guesses, currentGuess, turn}){
  return (
    <>
        {guesses.map((guess, i)=>{
          if(i===turn){
           return <GuessRow key={i} guess={currentGuess}/>
          }else{
           return <GuessRow key={i} guess={guess}/>
          }
        })}
    </>
  )
}
