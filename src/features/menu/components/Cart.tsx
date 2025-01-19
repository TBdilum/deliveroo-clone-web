import { Box, Container } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <Container
      disableGutters
      className="cart-container"
      sx={{
        background: "green",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "200",
      }}
    >
      Cart
    </Container>
  );
};

export default Cart;
