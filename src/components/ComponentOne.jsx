import React from 'react'

const ComponentOne = ({count, onClickHandler}) => {
  return (
    <div>
        <p>{count}</p>
        <button onClick={onClickHandler}>Click Bait</button>
    </div>
  )
}

export default ComponentOne