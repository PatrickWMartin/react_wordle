import GuessSqaure from "./GuessSquare"

export default function GuessRow({letter1, letter2, letter3, letter4, letter5}){
  return (
    <div style={{display: 'flex'}}>
     <GuessSqaure letter={letter1} /> 
     <GuessSqaure letter={letter2} /> 
     <GuessSqaure letter={letter3} /> 
     <GuessSqaure letter={letter4} /> 
     <GuessSqaure letter={letter5} /> 
    </div>
  )
}
