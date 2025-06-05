import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ActivityCard({
  timestamp,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) {
  return (
    <Card sx={{ backgroundColor: "#0D1333", color: "#FFF" }}>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          {timestamp}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 2, color: "rgba(255,255,255,0.8)" }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: "#FF3D57", textTransform: "none" }}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  );
}
