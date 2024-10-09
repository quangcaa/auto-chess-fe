import React from 'react'
import './Editprofile.css'

function EditProfile() {
  return (
      <div className='edit-main'>
        <div className='edit-main-content'>
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <p style={{ fontSize: 'xx-large', color: 'red', marginBottom: '0px' }}>Edit Profile</p>
          <p>All information is public and optional.</p>
        </div>
        <div className='edit-form'>
          <div>
            <b>Biography</b>
            <textarea />
            <p style={{ margin: '0px' }}>Talk about yourself, your interests, what you like in chess, your favorite openings, players, ...</p>
          </div>
          <div>
            <b>Real Name</b>
            <input type='text' />
          </div>
          <div>
            <b>Region or country</b>
            <input type='text' />
          </div>
          <div>
            <b>Location</b>
            <input type='text' />
          </div>
        </div>
        </div>
        <div className='edit-submit'>
          <hr />
          <button>Submit</button>
        </div>
      </div>
  )
}

export default EditProfile