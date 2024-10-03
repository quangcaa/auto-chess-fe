import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SideBarData } from "../SideBarData";
import SearchBar from "./searchBar";
import "../App.css";

function SideBar() {
  //   const [isOpen, setIsOpen] = useState(false);

  // //   const toggleSidebar = () => {
  // //     setIsOpen(!isOpen);
  // //   };

  // thuc hien search
  const handleSearch = (query) => {
    console.log("Tìm kiếm:", query);
  };

  return (
    <div className="SideBar">
      {/* <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? "Close" : "Open"} Sidebar
      </button> */}
      <div>
        <a>
          <Link to="/home">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Logo"
              style={{ width: "150px", height: "auto" }}
            />
          </Link>
        </a>
      </div>

      <ul>
        {SideBarData.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  ["nav-link", isActive ? "active" : ""].join(" ")
                }
              >
                <div>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "150px", height: "auto" }}
                  />
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <SearchBar style={{width: "150px", height: "auto"}} onSearch={handleSearch} />
    </div>
  );
}

export default SideBar;
