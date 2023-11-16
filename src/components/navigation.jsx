import React from 'react';
import { Link } from 'react-router-dom';
import './css_modules/navigation.css';

const Navigation = () => {
    return (
      <div className="navbar">
        <ul>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        </ul>
      </div>
    );
  };

export default Navigation;