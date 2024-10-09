import React from 'react'
import './CloseAccount.css'

function CloseAccount() {
  return (
    <div className='close-account'>
        <div className='close-account-header'>
            <img src='/img/warning.png' alt='warning'/>
            <p style={{ fontSize: 'xx-large', color: 'red'}}>Change Username</p>
        </div>
        <p>Are you sure you want to close your account? Closing your account is a permanent decision. You will NEVER be able to log in EVER AGAIN.</p>
        <p>You will not be allowed to open a new account with the same name, even if the case is different.</p>
        <p style={{fontWeight: 'bold'}}>Password</p>
        <input type='password' />
        <div className='edit-submit'>
          <hr />
          <div>
            <p>I changed my mind, don't close my account</p>
            <button>CLOSE ACCOUNT</button>
          </div>
        </div>
    </div>
  )
}

export default CloseAccount