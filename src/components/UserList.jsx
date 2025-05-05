import React from 'react'

export const UserList = () => {
    const users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 30},
        {id: 3, name: "Charlie", age: 22},
    ]  
    return (
    users.map(({id, name, age}) => (
            <div key={id}>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
            </div>
    ))
  )
}
