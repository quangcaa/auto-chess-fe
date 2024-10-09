import React from 'react'
import './ChangeUsername.css'

function ChangeUsername() {
  return (
    <div className='change-username'>
        <p style={{ fontSize: 'xx-large', color: 'red'}}>Change Username</p>
        <p style={{fontWeight: 'bold'}}>Username</p>
        <input type='text' />
        <p>Change your username. This can only be done once and you are only allowed to change the case of the letters in your username.</p>
        <div className='edit-submit'>
          <hr />
          <button>Submit</button>
        </div>
    </div>
  )
}

export default ChangeUsername