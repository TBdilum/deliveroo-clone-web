import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AnchorTemporaryDrawer from './AccountSideBar';
import logo from '../assets/deliverooLogo.svg'

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="Deliveroo Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar" style={{ position: 'relative', width: '200px' }}>
      <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#aaa',
            cursor: 'pointer',
          }}
        >
          🔍
        </span>
        <input
          type="text"
          placeholder="Search Tossed - St Martin's Lane"
          style={{
            width: '100%',
            padding: '10px 40px 10px 10px', // Add padding for the icon
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '2rem' }}>
          <Link to="/SignPage">
            <button>Sign Up or Login</button>
          </Link>
        </div>

        <div>
          <AnchorTemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
        </div>
      </div>
    </div>
  );
};

export default Header;
