// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-[#1e293b] text-white w-64 min-h-screen p-4 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <h2 className="text-xl font-semibold mb-6">Sidebar</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/home" className="text-white hover:bg-gray-700 p-2 rounded">
          Home
        </Link>
        <Link to="/about" className="text-white hover:bg-gray-700 p-2 rounded">
          About
        </Link>
        <Link to="/contact" className="text-white hover:bg-gray-700 p-2 rounded">
          Contact
        </Link>
        <Link to="/settings" className="text-white hover:bg-gray-700 p-2 rounded">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
