import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import logo from "../assets/deliverooLogo.svg";
import cross from "../assets/cancel (1).png";
import { Link } from "react-router-dom";
import account from "../assets/account.png";

type Anchor = "right";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      width="22rem"
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Link to="/">
          <img
            src={logo}
            style={{ margin: "1rem 1rem", cursor: "pointer" }}
          ></img>
        </Link>
        <img
          src={cross}
          style={{
            width: "1rem",
            height: "1rem",
            marginRight: "13px",
            color: "green",
            cursor: "pointer",
          }}
        ></img>
      </div>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: "2.5rem",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "0.3rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #D8D8D8",
            }}
          >
            <img src={account} style={{ width: "15px", height: "15px" }} />
            Account
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
