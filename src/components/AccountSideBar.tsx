import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { Colors, Svgs } from "../theme";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IconButton } from "@mui/material";
import Button from "./Button";

type AnchorTemporaryDrawerProps = {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
};

export default function AnchorTemporaryDrawer({
  open,
  toggleDrawer,
}: Readonly<AnchorTemporaryDrawerProps>) {
  const list = () => (
    <Box
      width={{ xs: "18rem", sm: "20rem", md: "22rem" }}
      zIndex={100000}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Link to="/" onClick={() => toggleDrawer(false)}>
          <img
            src={Svgs.DeliverooLogo}
            alt="Deliveroo Logo"
            style={{ margin: "1rem 1rem", cursor: "pointer" }}
          ></img>
        </Link>
        <IconButton onClick={() => toggleDrawer(false)}>
          <ClearOutlinedIcon
            style={{
              width: "2rem",
              height: "2rem",
              marginRight: "13px",
              color: Colors.background.brand,
              cursor: "pointer",
            }}
          ></ClearOutlinedIcon>
        </IconButton>
      </Box>
      <Box>
        <Link to={"/SignPage"} style={{ textDecoration: "none" }}>
          <Button
            onClick={() => toggleDrawer(false)}
            style={{
              textDecoration: "none",
              alignItems: "center",
              marginLeft: "1rem",
              width: "90%",
              marginTop: "4rem",
              backgroundColor: Colors.background.brand,
              color: Colors.text.inverse,
            }}
          >
            Log in Or sing up
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
