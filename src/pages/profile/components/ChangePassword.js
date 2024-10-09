import React from 'react'
import './ChangePassword.css'

function ChangePassword() {
  return (
    <div className='change-password'>
      <p style={{ fontSize: 'xx-large', color: 'red' }}>Change Password</p>
      <ul>
        <li>
          <p style={{ fontWeight: 'bold' }}>Current Password</p>
          <input type='password' />
        </li>
        <li>
          <p style={{ fontWeight: 'bold' }}>New Password</p>
          <input type='password' />
        </li>
        <li>
          <p style={{ fontWeight: 'bold' }}>New Password (again)</p>
          <input type='password' />
        </li>
      </ul>
      <div className='edit-submit'>
        <hr />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default ChangePassword