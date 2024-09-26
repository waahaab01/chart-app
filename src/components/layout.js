import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FaUserCircle, FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  // Handle menu dropdown
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle drawer open/close
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    setAnchorEl(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={drawerOpen}
        className="min-h-screen"
        sx={{
          width: drawerOpen ? 240 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerOpen ? 240 : 60,
            boxSizing: 'border-box',
            background: "linear-gradient(180deg, #191825, #865DFF)",
            color: "white",
          },
        }}
      >
        <div className="p-4">
          <IconButton onClick={() => toggleDrawer(!drawerOpen)} className="text-white">
            <MdMenu />
          </IconButton>
        </div>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon className="text-white">
              <FaHome />
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Home" />}
          </ListItem>

          <ListItem button component={Link} to="/about">
            <ListItemIcon className="text-white">
              <FaInfoCircle />
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="About" />}
          </ListItem>

          <ListItem button component={Link} to="/contact">
            <ListItemIcon className="text-white">
              <FaEnvelope />
            </ListItemIcon>
            {drawerOpen && <ListItemText primary="Contact" />}
          </ListItem>
        </List>
      </Drawer>

      {/* Main Layout */}
      <div className="flex-grow">
        {/* Navbar */}
        <AppBar
          position="static"
          className="bg-gradient-to-r from-[#191825] via-[#865DFF] to-[#E384FF] shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <Toolbar className="flex justify-between px-4">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/path/to/logo.png"
                alt="Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
              <h1 className="text-xl font-bold ml-2 text-white">MySite</h1>
            </Link>

            {/* Right: Profile and dropdown */}
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
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
