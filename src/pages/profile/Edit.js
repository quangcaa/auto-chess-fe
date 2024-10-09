import React, { useState } from 'react';
import EditProfile from './components/EditProfile';
import ChangeUsername from './components/ChangeUsername';
import ChangePassword from './components/ChangePassword';
import ChangeEmail from './components/ChangeEmail';
import CloseAccount from './components/CloseAccount';
import './Edit.css';

function Edit() {
  const [activePage, setActivePage] = useState('EditProfile')
  return (
    <div className='edit-profile'>
      <div className='nav-bar'>
        <p
          onClick={() => setActivePage('EditProfile')}
          style={{ color: activePage === 'EditProfile' ? 'red' : 'black' }}
        >
          Edit Profile
        </p>
        <p
          onClick={() => setActivePage('ChangeUsername')}
          style={{ color: activePage === 'ChangeUsername' ? 'red' : 'black' }}
        >
          Change Username
        </p>
        <p
          onClick={() => setActivePage('ChangePassword')}
          style={{ color: activePage === 'ChangePassword' ? 'red' : 'black' }}
        >
          Change Password
        </p>
        <p
          onClick={() => setActivePage('ChangeEmail')}
          style={{ color: activePage === 'ChangeEmail' ? 'red' : 'black' }}
        >
          Change Email
        </p>
        <p
          onClick={() => setActivePage('CloseAccount')}
          style={{ color: activePage === 'CloseAccount' ? 'red' : 'black' }}
        >
          Close Account
        </p>
      </div>
      {activePage === 'EditProfile' && <EditProfile />}
      {activePage === 'ChangeUsername' && <ChangeUsername />}
      {activePage === 'ChangePassword' && <ChangePassword />}
      {activePage === 'ChangeEmail' && <ChangeEmail />}
      {activePage === 'CloseAccount' && <CloseAccount />}
    </div>
  );
}

export default Edit;
