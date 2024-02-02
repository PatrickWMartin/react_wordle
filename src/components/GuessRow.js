import GuessSqaure from "./GuessSquare"

export default function GuessRow({ guess }){
  let letters = ['','','','','']
  if (guess){
    letters = guess.split('')
    while (letters.length < 5){
      letters.push('')
    }
  }  return (
    <div style={{display: 'flex'}}>
      {letters.map((letter, i)=>(
       <GuessSqaure key={i} letter={letter} /> 
      ))}
    </div>
  )
}
