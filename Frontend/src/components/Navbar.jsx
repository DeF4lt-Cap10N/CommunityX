
// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const onLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Title */}
        <Link to="/" className="text-violet-700 text-2xl font-bold">CommunityX</Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <Link to="/" className="text-gray-600 hover:text-violet-700 transition-colors">
                <div className="text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home mx-auto mb-1"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Home
                </div>
              </Link>
              <Link to="/profile/me" className="text-gray-600 hover:text-violet-700 transition-colors">
                <div className="text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user mx-auto mb-1"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  My Profile
                </div>
              </Link>
              <button onClick={onLogout} className="text-gray-600 hover:text-violet-700 transition-colors">
                <div className="text-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out mx-auto mb-1"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                  Logout
                </div>
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="text-gray-600 hover:text-violet-700 transition-colors">Join now</Link>
              <Link to="/login" className="px-4 py-2 border-2 border-violet-600 text-violet-600 font-bold rounded-full hover:bg-violet-50 transition-colors">Sign in</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
