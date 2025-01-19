import { Box } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <Box
      className="cart-container"
      sx={{
        marginTop: "2rem",
        marginLeft: "0.5rem",
        height: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: "60px",
        zIndex: "100",
        border: "1px solid grey",
        boxShadow: "2px 2px 2px lightgrey",
      }}
    >
      Cart
    </Box>
  );
};

export default Cart;
