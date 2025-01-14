import { Box } from "@mui/material";
import React from "react";
import SpecialView from "./SpecialView";
import PopularView from "./PopularView";
import DishView from "./DishView";

const MenuView = () => {
  return (
    <Box
      sx={{
        background: "red",
        height: "500px",
      }}
    >
      <SpecialView />
      <PopularView />
      <DishView />
    </Box>
  );
};

export default MenuView;
