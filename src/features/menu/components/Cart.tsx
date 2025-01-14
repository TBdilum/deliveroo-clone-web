import { Box } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <Box
      sx={{
        background: "green",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: "100px",
      }}
    >
      Cart
    </Box>
  );
};

export default Cart;
