import { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

import Sidebar from "./components/Sidebar";

export default function App() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar mobileOpen={mobileOpen} onToggle={handleDrawerToggle} />
    </Box>
  );
}
