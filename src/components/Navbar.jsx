// Navbar.jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

import message from "../assets/message.png";
import notification from "../assets/notification.png";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidthFull = 240;

export default function Navbar({ onMenuClick }) {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm")); // ≥ sm
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // ≥ md

  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        width: { md: `calc(100% - ${drawerWidthFull}px)` },
        ml: { md: `${drawerWidthFull}px` },
      }}
    >
      <Toolbar>
        {!isSmUp && (
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 1 }}
          >
            <MenuIcon color="#B2B2B2" />
          </IconButton>
        )}

        {/* Search area */}
        {isSmUp ? (
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              color: "#B2B2B2",
              border: "1px solid #E0E0E0",
              mx: 1,
              width: isMdUp ? "300px" : "100%",
            }}
          >
            <Box
              sx={{
                pl: 2,
                pr: 1,
                py: 0.5,
                display: "flex",
                alignItems: "center",
              }}
            >
              <InputBase
                placeholder="Search"
                sx={{ ml: 1, flex: 1, fontSize: 14 }}
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIcon color="#B2B2B2" />
            </Box>
          </Box>
        ) : (
          <IconButton aria-label="search" sx={{ ml: 1 }}>
            <SearchIcon color="#B2B2B2" />
          </IconButton>
        )}

        <Box sx={{ flexGrow: 1 }} />

        {/* Notification & Chat icons */}
        <IconButton size="large" color="inherit">
          <Box
            component="img"
            src={notification}
            alt="Notifications"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>

        <IconButton size="large" color="inherit" sx={{ ml: 0.1 }}>
          <Box
            component="img"
            src={message}
            alt="Messages"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>

        {/* Avatar */}
        <Box sx={{ ml: 0.1 }}>
          <IconButton onClick={handleAvatarClick} size="small">
            <Avatar
              src="https://images.unsplash.com/photo-1603415526960-f8f96eaac6e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&q=80&w=200"
              alt="John Doe"
              sx={{ width: 32, height: 32 }}
            />
            {isMdUp && (
              <Typography variant="body2" sx={{ ml: 1 }}>
                Admimra John
              </Typography>
            )}
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openUserMenu}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}
