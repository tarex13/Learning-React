import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  return (
    <div>
       <h1>Welcome</h1>{loggedIn && isAdmin  && <h1>Admin</h1>}
       {<h1>Welcome</h1> && loggedIn && !isAdmin  && <h1>User</h1>}
    </div>
  )
}

export default UserStatus