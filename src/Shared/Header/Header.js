import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-primaryBgColor fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Navbar logo or brand */}
        <Link to="/" className="text-white text-lg font-bold">
          Your Brand
        </Link>

        {/* Navbar menu */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/services" className="text-white font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="text-white font-bold">
              My Reviews
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white font-bold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
