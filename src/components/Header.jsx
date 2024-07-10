// Example: Importing CSS in Header.jsx
import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      {/* Include other header elements like navigation links */}
      <img
        className="header__avatar"
        src="https://www.example.com/avatar.jpg"
        alt="User Avatar"
      />
    </div>
  );
};

export default Header;

