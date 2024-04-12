import React from 'react';

import logo from '../assets/logoes/smile-mask.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Menu items */}
          <div className="hidden sm:block">
            <ul className="ml-4 flex items-center space-x-4">
              <li>
                <a href="/" className="text-white hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/portfolio" className="text-white hover:text-gray-300">Portfolio</a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
