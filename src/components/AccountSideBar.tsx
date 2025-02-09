import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { Colors, Svgs } from "../theme";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IconButton } from "@mui/material";

type AnchorTemporaryDrawerProps = {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
};

export default function AnchorTemporaryDrawer({
  open,
  toggleDrawer,
}: Readonly<AnchorTemporaryDrawerProps>) {
  const list = () => (
    <Box width="22rem" zIndex={100000}>
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Link to="/">
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
      </div>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
