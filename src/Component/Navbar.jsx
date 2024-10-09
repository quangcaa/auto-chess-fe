import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="site-title">
          <Link to="/">
            <img src="autochess-logo.png" id="nav-logo" alt="AutoChess" />
          </Link>
        </li>
        <li>
          <Link to="/">PLAY</Link>{" "}
        </li>
        <li>
          <Link to="/puzzles">PUZZLES</Link>
        </li>
        <li>
          <Link to="/inbox">INBOX</Link>
        </li>
        <li>
          <Link to="/forum">FORUM</Link>
        </li>
      </ul>
      <div className="nav-right">
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
