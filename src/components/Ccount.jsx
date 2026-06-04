import React,{useState} from 'react'

function Ccount() {
  const[text,setText]=useState('')
  return (
    <div>
        <p>{text}</p>
        <p>Characters: {text.length}</p>
        <input type="text" 
        value={text} 
        placeholder='Enter Your Name' 
        onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default Ccount