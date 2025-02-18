import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { Colors, Svgs } from "../theme";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IconButton, Typography } from "@mui/material";
import Button from "./Button";
import TokenDecoder from "../TokenDecoder";
import ShowBarWithProgress from "../ShowBarWithProgress";

type AnchorTemporaryDrawerProps = {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
};

export default function AnchorTemporaryDrawer({
  open,
  toggleDrawer,
}: Readonly<AnchorTemporaryDrawerProps>) {
  const token = localStorage.getItem("token");
  const firstName = TokenDecoder();

  function LogOut() {
    localStorage.clear();
    window.location.reload();
  }

  const list = () => (
    <Box
      width={{ xs: "18rem", sm: "20rem", md: "22rem" }}
      zIndex={1000}
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

      {!token && (
        <Box>
          <Link to={"/Account"} style={{ textDecoration: "none" }}>
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
              Log in or Sign up
            </Button>
          </Link>
        </Box>
      )}

      {token && firstName === "" && <ShowBarWithProgress />}
      {token && firstName !== "" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              mt: "4rem",
              fontSize: "2rem",
              fontWeight: "bold",
              color: Colors.text.default,
            }}
          >{`Hello! ${TokenDecoder()}`}</Typography>
          <Button
            sx={{
              alignItems: "center",
              width: "90%",
              marginTop: "4rem",
              backgroundColor: Colors.background.brand,
              color: Colors.text.inverse,
            }}
          >
            Dashboard
          </Button>
          <Button
            sx={{
              alignItems: "center",
              width: "90%",
              marginTop: "1rem",
              backgroundColor: Colors.background.brand,
              color: Colors.text.inverse,
            }}
          >
            Settings
          </Button>
          <Button
            onClick={() => LogOut()}
            sx={{
              alignItems: "center",

              width: "90%",
              marginTop: "1rem",
              backgroundColor: Colors.background.brand,
              color: Colors.text.inverse,
            }}
          >
            Log Out
          </Button>
          <Button
            sx={{
              alignItems: "center",

              width: "90%",
              top: "350px",
              marginTop: "1rem",
              backgroundColor: Colors.background.brand,
              color: Colors.text.inverse,
            }}
          >
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
