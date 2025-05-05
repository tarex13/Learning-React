import React from 'react'

const Greeting = () => {
    const mess_ = "Hello There";
    var date_ = new Date();
    var name_ = "John";
  return (
    <div>
        <h1>{mess_}  {name_}</h1>
        <p>{date_.toLocaleString()}</p>
        
    </div>
  )
}

export default Greeting

