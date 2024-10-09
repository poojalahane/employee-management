import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = () => {
      localStorage.removeItem('token'); // Remove the token on logout
      window.location.href = '/'; // Redirect to login
  };

  return (
      <nav style={navStyle}>
          <h1>Employee Management</h1>
          <ul style={ulStyle}>
             
              <li><Link to="/register">Register</Link></li> {/* Add Register link */}
              <li><Link to="/employees">All Employees</Link></li>
              <li><Link to="/create">Create Employee</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
      </nav>
  );
}

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#333',
    color: '#fff'
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px'
};

export default Navbar;
