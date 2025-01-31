import { Box, Typography } from "@mui/material";
import React from "react";

const MealDeal = () => {
  return (
    <div
      style={{
        height: "350px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "1200px",
        paddingTop: "2rem",
        backgroundColor: "#000", // Fallback background color if needed
        zIndex: 0,
        position: "absolute", // For image positioning
      }}
    >
      {/* Meal Deals Background */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <img
          src="/assets/MealDealsBackground.svg"
          alt="Meal Deals Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          alignItems: "center",
          color: "white",
          zIndex: 2,
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <img
            src="/assets/merch-sparkleleft.svg"
            alt="Sparkle Left"
            style={{
              width: "8%", // Smaller for responsiveness
              height: "auto",
              marginRight: "1rem",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
              paddingLeft: "0.1rem",
              paddingRight: "0.1rem",
              textAlign: "center",
            }}
          >
            Up to 25% off meal deals
          </Typography>
          <img
            src="/assets/merch-sparkleright.svg"
            alt="Sparkle Right"
            style={{
              width: "8%",
              height: "auto",
              objectFit: "contain",
              marginLeft: "1rem",
            }}
          />
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            mb: "0.5rem",
            mt: "1rem",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Smaller text on small screens
          }}
        >
          Need a midweek pick-me-up, a break from cooking for the family or just
          <br />
          fancy your favourite restaurant?
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mb: "4rem",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" }, // Smaller text on small screens
          }}
        >
          Subject to availability. Participating restaurants only.
          Service/delivery fees apply. T&Cs
        </Typography>
      </Box>

      {/* Item Row Image */}
      <img
        src="/assets/merch-itemrow.svg"
        alt="item-row"
        style={{
          width: "100%",
          height: "auto",
          marginTop: "2rem",
          bottom: "0",
          position: "absolute", // Add spacing below the content
        }}
      />
    </div>
  );
};

export default MealDeal;
