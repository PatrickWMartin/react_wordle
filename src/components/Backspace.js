
export default function Backspace({deleteLetterHandler}){
  return <button style={{height: '58px', width: '65px', margin: '2px'}} onClick={deleteLetterHandler}><p>X</p></button>
}
