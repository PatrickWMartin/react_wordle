export default function LetterKey({ letter, onClick }){
  return <button style={{height: '58px', width: '43px', margin: '2px'}} onClick={() => onClick(letter)}><p>{letter}</p></button>
}
