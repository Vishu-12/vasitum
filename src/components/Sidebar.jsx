import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

import logo from "../assets/logo.png";
import support from "../assets/support.png";
import schedule from "../assets/schedule.png";
import setting from "../assets/setting.png";
import department from "../assets/department.png";
import employee from "../assets/employee.png";
import recruitment from "../assets/recruitment.png";

const drawerWidthFull = 240;
const drawerWidthCollapsed = 60;

export default function Sidebar({ mobileOpen, onToggle }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const drawerVariant = isMdUp ? "permanent" : "temporary";
  const drawerWidth = isMdUp ? drawerWidthFull : drawerWidthCollapsed;

  const mainItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon sx={{ color: "#FF5151" }} />,
      iconColor: "#FF5151", 
    },
    {
      label: "Recruitment",
      icon: (
        <Box
          component="img"
          src={recruitment}
          alt="Recruitment"
          sx={{ width: 24, height: 24 }}
        />
      ),
      iconColor: null,
    },
    {
      label: "Schedule",
      icon: (
        <Box
          component="img"
          src={schedule}
          alt="Schedule"
          sx={{ width: 24, height: 24 }}
        />
      ),
      iconColor: null,
    },
    {
      label: "Employee",
      icon: (
        <Box
          component="img"
          src={employee}
          alt="Employee"
          sx={{ width: 24, height: 24 }}
        />
      ),
      iconColor: null,
    },
    {
      label: "Department",
      icon: (
        <Box
          component="img"
          src={department}
          alt="Department"
          sx={{ width: 24, height: 24 }}
        />
      ),
      iconColor: null,
    },
  ];

  const otherItems = [
    {
      label: "Support",
      icon: (
        <Box
          component="img"
          src={support}
          alt="Support"
          sx={{ width: 24, height: 24 }}
        />
      ),
      iconColor: null,
    },
    {
      label: "Settings",
      icon: (
        <Box
          component="img"
          src={setting}
          alt="Settings"
          sx={{ width: 24, height: 24 }}
        />
      ),
      iconColor: null,
    },
  ];

  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerWidthFull, sm: drawerWidthCollapsed, xs: 0 },
        flexShrink: { md: 0 },
      }}
      aria-label="sidebar"
    >
      <Drawer
        variant={drawerVariant}
        open={mobileOpen}
        onClose={onToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 94,
            px: 2,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Vasitum Logo"
            sx={{ height: 40, width: "auto" }}
          />
          {isMdUp && (
            <Typography
              variant="h6"
              noWrap
              color="#0A337A"
              fontWeight={700}
              marginLeft={1}
            >
              Vasitum
            </Typography>
          )}
        </Box>

        {/* MAIN MENU header */}
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary="MAIN MENU"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
                sx: { pl: 2, pt: 1, pb: 1 },
              }}
            />
          </ListItem>

          {mainItems.map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton sx={{ py: 1.5 }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {isMdUp && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: { color: item.iconColor || "inherit" },
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* OTHER header */}
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary="OTHER"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
                sx: { pl: 2, pt: 1, pb: 1 },
              }}
            />
          </ListItem>

          {otherItems.map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton sx={{ py: 1.5 }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {isMdUp && <ListItemText primary={item.label} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
