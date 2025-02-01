import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../../../components/Button";

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
        width: "95%",
        height: "450px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "250px",
          overflow: "hidden",
          borderRadius: "10px",
          marginBottom: "15px",
          position: "relative",
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
            color: "#333",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#666",
            textAlign: "left",
            marginBottom: "50px",
            marginTop: "10px",
          }}
        >
          {description}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          marginTop: "-30px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#00CCBC",
            color: "white",
            fontSize: "0.9rem",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "none",
            width: "50%",
            marginTop: "-90px",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default MainCard;
