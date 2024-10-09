import React, { useState } from "react";
import "./userMenu.css";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="user-menu" onClick={toggleMenu}>
      <span className="username">penguin6</span>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Profile</li>
            <li>Setting</li>
            <li>Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
