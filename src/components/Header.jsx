// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Link>
      
      <div className="header__nav">
        <Link to="/">Movies</Link>
        {/* <Link to="/movie:id">Movies</Link> */}
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        {/* Add more navigation links as needed */}
      </div>
      <SearchBar />
      <img
        className="header__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Avatar"
      />
    </div>
  );
};

export default Header;


