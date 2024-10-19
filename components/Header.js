import React from "react";
import { Link } from "react-router-dom";
import SearchRestaurent from "./Search";
import "./Header.css"; // Assuming we create a CSS file for the header

const Title = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          className="logo"
          alt="FoodVilla Logo"
          src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
        />
      </Link>
    </div>
  );
};

const HeaderComponent = (props) => {
  return (
    <header className="header">
      {/* Logo */}
      <Title />

      {/* Search Bar */}
      <div className="search-container">
        <SearchRestaurent handleSearch={props.handleSearch} />
      </div>

      {/* Navigation Links */}
      <nav className="nav-items">
        <ul>
          
          <li>
            <Link to="/About"><b>About</b></Link>
          </li>
          <li>
            <Link to="/Contact"><b>Contact</b></Link>
          </li>
          <li>
            <Link to="/Cart"><b>Cart</b></Link>
          </li>
          <li>
            <Link to="/Home"><b>Login</b></Link>
          </li>
        </ul>
      </nav>

      {/* Profile */}
      {/* <div className="profile-container">
        <Link to="/profile">
          <img
            className="profile-icon"
            alt="User Profile"
            src="https://www.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
          />
        </Link>
      </div> */}
    </header>
  );
};

export default HeaderComponent;










