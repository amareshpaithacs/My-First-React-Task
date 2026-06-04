import React, { useState } from 'react'

function Login() {
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[show,setShow]=useState(false)
  return (
    <div>
           <input type = "text" 
            placeholder = "username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />
        <div>
            <input type = "password" 
            placeholder = "password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={() => setShow(true)}>Show Details</button>
        {show && <div>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
        </div>}
    </div>
    
    
  )
}

export default Login