import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const ExampleThree = () => {
const [name, setname] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : "";
})

const handleChange = (e) => {
    setname(e.target.value)
}

useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
}, [name])
const handleClear = () => {
    setname("");
}
  return (
    <div><h1>
        Youe Name: {name}
        </h1>
        <input type="text" value={name} onChange={handleChange} placeholder='Enter Your Name'/>
        <button onClick={handleClear}>Hello</button>
        </div>
  )
}

export default ExampleThree