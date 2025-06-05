import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const defaultSchedules = {
  priority: { text: "Review candidate applications", time: "Today - 11:30 AM" },
  other: [
    { text: "Interview with candidates", time: "Today - 10:30 AM" },
    {
      text: "Short meeting with product designer from IT Department",
      time: "Today - 09:15 AM",
    },
  ],
};

export default function ScheduleList({ schedules = defaultSchedules }) {
  const [selectedDate, setSelectedDate] = useState("Today, 13 Sep 2021");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="subtitle2">Upcoming Schedule</Typography>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={selectedDate}
              onChange={handleDateChange}
              IconComponent={ExpandMoreIcon}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                fontSize: 14,
              }}
            >
              <MenuItem value="Today, 13 Sep 2021">Today, 13 Sep 2021</MenuItem>
              <MenuItem value="Tomorrow, 14 Sep 2021">
                Tomorrow, 14 Sep 2021
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Priority Section */}
        <Box mt={1}>
          <Typography variant="caption" color="textSecondary">
            Priority
          </Typography>
          <ListItem disablePadding>
            <ListItemText
              primary={schedules.priority.text}
              secondary={
                <Typography variant="caption" color="textSecondary">
                  {schedules.priority.time}
                </Typography>
              }
            />
            <IconButton edge="end">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItem>
        </Box>

        {/* Other Section */}
        <Box mt={1}>
          <Typography variant="caption" color="textSecondary">
            Other
          </Typography>
          {schedules.other.map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText
                primary={item.text}
                secondary={
                  <Typography variant="caption" color="textSecondary">
                    {item.time}
                  </Typography>
                }
              />
              <IconButton edge="end">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </ListItem>
          ))}
        </Box>

        <Box textAlign="center" mt={1}>
          <Button size="small" sx={{ color: "#FF3D57", textTransform: "none" }}>
            Create a New Schedule
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
