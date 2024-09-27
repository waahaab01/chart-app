// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle menu dropdown
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setAnchorEl(null);
    navigate("/login");
  };

  return (
    <div className="bg-[#1e293b] flex items-center justify-between h-16 px-4 shadow-md">
      <div className="flex items-center space-x-4">
        <IconButton onClick={toggleSidebar} className="text-gray-400">
          <MdOutlineMenu size={28} />
        </IconButton>
        <Link to="/" className="text-2xl font-bold text-white">
          Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <IconButton onClick={handleMenuOpen} className="focus:outline-none">
          <Avatar className="bg-[#865DFF] text-white">
            <FaUserCircle className="text-2xl" />
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              navigate("/profile");
            }}
            className="flex items-center space-x-2"
          >
            <FiUser className="text-indigo-600" />
            <p className="text-indigo-600">Profile</p>
          </MenuItem>

          <MenuItem onClick={handleLogout} className="flex items-center space-x-2">
            <FiLogOut className="text-red-500" />
            <p className="text-red-500">Logout</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
