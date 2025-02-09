import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../theme";

interface MainCardProps {
  image: string;
  title: string;
  description: string;
}

const MainCard: React.FC<MainCardProps> = ({ image, title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "450px",
        mt: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "250px",
          overflow: "hidden",
          borderRadius: "10px",
          marginBottom: "10px",
          position: "relative",
          justifyContent: "flex-start",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
          }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "left",
            color: Colors.text.default,
            fontSmoothing: "antialiased",
            marginBottom: "15px",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.8rem",
            color: Colors.text.default,
            fontSmoothing: "antialiased",
            marginBottom: "1px",
            textAlign: "left",
          }}
        >
          {description}
        </Typography>
      </Box>
      <IconButton
        sx={{
          backgroundColor: Colors.background.brand,
          color: Colors.text.inverse,
          fontSize: "0.9rem",
          fontWeight: "bold",
          borderRadius: "3px",
          width: "50%",
          maxWidth: "100%",
          fontSmoothing: "antialiased",
          paddingTop: "-10px",
          paddingBottom: "10px",
          marginTop: "-20px",
        }}
      >
        Get Started
      </IconButton>
    </Box>
  );
};

export default MainCard;
