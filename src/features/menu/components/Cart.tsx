import { Box, Typography } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Colors } from "../../../theme";

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
        borderRadius: "5px",
        border: `1px solid ${Colors.border.subtle}`,
        backgroundColor: Colors.background.defaultLight,
      }}
    >
      <ShoppingBasketOutlinedIcon
        sx={{ height: "90px", width: "90px", color: Colors.text.light }}
      />
      <Typography sx={{ color: Colors.text.light, fontWeight: "bold" }}>
        Your Basket is Empty
      </Typography>
    </Box>
  );
};

export default Cart;
