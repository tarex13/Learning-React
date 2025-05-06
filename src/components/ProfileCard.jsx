import React from 'react'

const ProfileCard = () => {
    const styles = {backgroundColor: 'lightgray', padding: '20px', borderRadius: '8px', textColor: 'black'}
  return (
    <div style={styles}>
        <label>Greeting:</label>
        <label>Here is your greeting</label>
    </div>
  )
}

export default ProfileCard