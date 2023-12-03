import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const changeChar=(e)=>{
    setText(e.target.value);
  }
  const handleUpper=()=>{
    let newText=text.toUpperCase()
    setText(newText);
  }
  const handleLower=()=>{
    let newText=text.toLowerCase()
    setText(newText);
  }
  const handleReset=()=>{
    setText("");
  }
  return (
    <div className='container'> 
      <h1>CharacterCounter</h1>
      <textarea name="" placeholder='Enter some text' value={text} onChange={changeChar}></textarea>
      <div className="next">
        <button onClick={handleUpper}>Convert to UPPERCASE</button>
        <button onClick={handleLower}>Convert to lowercase</button>
        <button onClick={handleReset}>Reset text</button>
      </div>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words {text.length} characters.</p>
      <p>Average time read is {text.split("").length*0.08} minutes.</p>
    </div>
  )
}
export default App
