// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/">QUPORT</Link></li>
        <li><Link to="/chat-2">PADEL AI</Link></li>
        <li><Link to="/chat-3">SOCCER AI</Link></li>
        <li><Link to="/chat-4">BAKERMAN</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
