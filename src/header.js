import React from 'react';
import logo from '../src/OnRetreat_Logo.png';

 const Header = () => {
    return (
      <div className="header-container">
        <img src={logo} className="header-logo" alt="logo" />
      </div>
    )
}

export default Header;