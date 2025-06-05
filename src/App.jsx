import React, { useState } from "react";
import { Box, Toolbar, Grid } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import ActivityCard from "./components/ActivityCard";
import AnnouncementList from "./components/AnnouncementList";
import ScheduleList from "./components/ScheduleList";

const drawerWidthFull = 240;

export default function App() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar mobileOpen={mobileOpen} onToggle={handleDrawerToggle} />
      <Navbar onMenuClick={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidthFull}px)` },
        }}
      >
        <Toolbar />

        <Box sx={{ pl: 3, pb: 2 }}>
          <h2>Dashboard</h2>
        </Box>
        <Grid container spacing={2}>
          <Grid container xs={12} sm={6} size={{ xs: 6, md: 7 }}>
            <Grid item size={4} xs={12} sm={6}>
              <StatsCard
                title="Available Position"
                count={24}
                subtitle="4 Urgently needed"
                bgcolor="#FFF3E0"
              />
            </Grid>
            <Grid item size={4} xs={12} sm={6}>
              <StatsCard
                title="Job Open"
                count={10}
                subtitle="4 Active hiring"
                bgcolor="#E3F2FD"
              />
            </Grid>
            <Grid item size={4} xs={12} sm={6}>
              <StatsCard
                title="New Employees"
                count={24}
                subtitle="4 Department"
                bgcolor="#FCE4EC"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} size={6}>
              <StatsCard
                title="Total Employees"
                count={216}
                subText="120 Men / 96 Women"
                trendText="+2% ↗"
                trendCaption="+2% Past month"
                trendBg="#FFE0E0"
                trendColor="#D32F2F"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} size={6}>
              <StatsCard
                title="Talent Request"
                count={16}
                subText="6 Men / 10 Women"
                trendText="+5% ↗"
                trendCaption="+5% Past month"
                trendBg="#E8F5E9"
                trendColor="#388E3C"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={7} size={12}>
              <AnnouncementList />
            </Grid>
          </Grid>
          <Grid size={{ xs: 6, md: 5 }}>
            <Grid item size={10} xs={12} sm={6}>
              <ActivityCard
                timestamp="10:40 AM, Fri 10 Sep 2021"
                title="You Posted a New Job"
                description="Kindly check the requirements and terms of work and make sure everything is right. Today you make 12 Activity"
                buttonLabel="See All Activity"
                onButtonClick={() => {
                  console.log("See All Activity clicked");
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <ScheduleList />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
