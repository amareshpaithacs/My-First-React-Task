import React, { useState } from 'react';

function Form() {
    const[name,setName]=useState('');
  return (
    <div> 
        <p>Hello, {name ? name : 'Guest'}</p>
        <input type="text" 
        value={name} 
        placeholder='Enter Your Name' 
        onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default Form