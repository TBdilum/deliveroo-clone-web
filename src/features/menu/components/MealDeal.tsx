import { Box, Typography } from "@mui/material";
import React from "react";

const MealDeal = () => {
  return (
    <div
      style={{
        height: "350px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "1250px",
        backgroundImage:
          "url('https://cwa.roocdn.com/_next/static/media/merch-itemrow@2x.09d506d7.svg'),url('/assets/merch-sparkleleft.svg'),url('/assets/merch-sparkleright.svg'), url('/assets/MealDealsBackground.svg')",
        backgroundPosition:
          "center bottom, 29% center,  71% center  ,center center",
        backgroundPositionY: "bottom, 45px, 43px , 0px",
        backgroundSize: "contain, 5% , 5% ,cover",
        backgroundRepeat: "no-repeat,no-repeat,no-repeat , no-repeat",
        backgroundBlendMode: "normal",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "3rem" }}>
          Up to 25% off meal deals
        </Typography>
        <Typography sx={{ textAlign: "center", mb: "0.5rem", mt: "1rem" }}>
          Need a midweek pick-me-up, a break from cooking for the family or just
          <br />
          fancy your favourite restaurant?
        </Typography>
        <Typography sx={{ textAlign: "center", mb: "4rem" }}>
          Subject to availability. Participating restaurants only.
          Service/delivery fees apply. T&Cs
        </Typography>
      </Box>
    </div>
  );
};

export default MealDeal;
