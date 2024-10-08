import { Outlet, Link } from "react-router-dom";
import "./Nav.css";
import SearchBar from './Component/searchbar';
import UserMenu from './Component/UserMenu';

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li className="site-title">
            <Link to="/" >
            <img src="/img/LogoAutoChess.png" alt="AutoChess"/>
            </Link>
          </li>
          <li><Link to="/">Play</Link> </li>
          <li><Link to="/puzzles">Puzzles</Link></li>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/forum">Forum</Link></li>
          
        </ul>
        <UserMenu />
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
