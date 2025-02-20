import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Colors } from "../../../theme";

const ShowBarWithProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => (oldProgress >= 75 ? 75 : oldProgress + 5));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#F6F6F6",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: `0px 4px 10px 5px ${Colors.boxShadow.default}`,
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#00CCBC",
              mb: 1,
            }}
          >
            Complete your profile to get started!
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: "10px",
              borderRadius: "5px",
              backgroundColor: "#E0E0E0",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(90deg, #00CCBC, #18DBBB)",
              },
            }}
          />
        </Box>

        <ArrowForwardIosIcon sx={{ color: "#00CCBC", ml: 2 }} />
      </Box>
    </Box>
  );
};

export default ShowBarWithProgress;
