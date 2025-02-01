import { Box, Typography } from "@mui/material";
import React from "react";

const MealDeal = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "2rem 0",
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Meal Deals Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
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
      </Box>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          alignItems: "center",
          color: "white",
          zIndex: 2,
          position: "relative",
          padding: "2rem",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <img
            src="/assets/merch-sparkleleft.svg"
            alt="Sparkle Left"
            style={{
              width: "8%",
              height: "auto",
              marginRight: "1rem",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
              paddingLeft: "0.1rem",
              paddingRight: "0.1rem",
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
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          Need a midweek pick-me-up, a break from cooking for the family or just
          <br />
          fancy your favourite restaurant?
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mb: "6rem",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
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
          position: "absolute",
          bottom: 0,
        }}
      />
    </Box>
  );
};

export default MealDeal;
