import React from 'react'
import './ChangeEmail.css'

function ChangeEmail() {
  return (
    <div className='change-email'>
        <p style={{ fontSize: 'xx-large', color: 'red'}}>Change Email</p>
        <ul>
            <li>
                <p style={{fontWeight: 'bold'}}>Password</p>
                <input type='password' />
            </li>
            <li>
                <p style={{fontWeight: 'bold'}}>Email</p>
                <input type='email' />
            </li>
        </ul>
        <div className='edit-submit'>
          <hr />
          <button>Submit</button>
        </div>
    </div>
  )
}

export default ChangeEmail