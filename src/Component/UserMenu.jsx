import React, { useState } from 'react';
import './usermenu.css';

const UserMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(
    <div className="user-menu" onClick={toggleMenu}>
    <span className="username">hitler</span>
    {isMenuOpen && (
      <div className="dropdown-menu">
        <ul>
          <li>
             Profile
          </li>
          <li>
            Inbox
          </li>
          <li>
             Preferences
          </li>
          <li>
             Sign out
          </li>
        </ul>
      </div>
    )}
  </div>
  );

};
export default UserMenu;