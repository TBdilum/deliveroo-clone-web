import { Box, Typography } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const Cart = () => {
  return (
    <Box
      className="cart-container"
      sx={{
        marginTop: "2rem",
        marginLeft: "0.5rem",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: "60px",
        zIndex: "100",
        border: "1px solid lightgrey",
      }}
    >
      <ShoppingBasketOutlinedIcon
        sx={{ height: "90px", width: "90px", color: "rgb(171, 173, 173)" }}
      />
      <Typography sx={{ color: "rgb(143, 144, 144)" }}>
        Your Basket is Empty
      </Typography>
    </Box>
  );
};

export default Cart;
