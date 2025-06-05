import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StatsCard(props) {
  const {
    title,
    count,
    subtitle,
    bgcolor,
    subText,
    trendText,
    trendCaption,
    trendBg,
    trendColor,
  } = props;

  const isMetric = Boolean(subText);

  return (
    <Card sx={isMetric ? {} : { backgroundColor: bgcolor, boxShadow: "none" }}>
      <CardContent>
        <Typography
          variant="subtitle2"
          gutterBottom
          color={isMetric ? "textPrimary" : "textPrimary"}
        >
          {title}
        </Typography>

        <Typography variant="h4" gutterBottom>
          {count}
        </Typography>

        {isMetric ? (
          <>
            <Typography variant="body2" color="textSecondary">
              {subText}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 24,
                  backgroundColor: trendBg,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  color: trendColor,
                }}
              >
                {trendText}
              </Box>
              <Typography variant="caption" color="textSecondary">
                {trendCaption}
              </Typography>
            </Box>
          </>
        ) : (
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
