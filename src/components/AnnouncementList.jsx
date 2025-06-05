import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
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
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

const defaultAnnouncements = [
  { text: "Outing schedule for every department", time: "5 Minutes ago" },
  { text: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
  {
    text: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
  },
];

export default function AnnouncementList({
  announcements = defaultAnnouncements,
}) {
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
          <Typography variant="subtitle2">Announcement</Typography>
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
              <MenuItem value="Yesterday, 12 Sep 2021">
                Yesterday, 12 Sep 2021
              </MenuItem>
              <MenuItem value="This Week">This Week</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <List>
          {announcements.map((a, idx) => (
            <ListItem key={idx} secondaryAction={<PushPinOutlinedIcon />}>
              <ListItemText
                primary={a.text}
                secondary={
                  <Typography variant="caption" color="textSecondary">
                    {a.time}
                  </Typography>
                }
              />
              <IconButton edge="end">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </ListItem>
          ))}
        </List>

        <Box textAlign="center">
          <Button size="small" sx={{ color: "#FF3D57", textTransform: "none" }}>
            See All Announcement
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
