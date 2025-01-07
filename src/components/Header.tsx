import { Link } from "react-router-dom";
import AnchorTemporaryDrawer from "./AccountSideBar";
import logo from "../assets/deliverooLogo.svg";
import home from "../assets/home.png";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 0,
        borderBottom: "0.5px solid black",
        width: "100%",
        position: "sticky",
        top: "0",
        zIndex: "100",
        paddingTop: 0,
        backgroundColor: "white",
        height: "70px",
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <Link to="/">
          <img src={logo} alt="Deliveroo Logo" />
        </Link>
      </div>

      <div className="search-bar" style={{ position: "relative", flex: 1 }}>
        <span
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#D8D8D8",
            cursor: "pointer",
          }}
          className="search-icon"
        >
          🔍
        </span>
        <input
          type="text"
          placeholder="Search Tossed - St Martin's Lane"
          style={{
            borderRadius: "0.3rem",
            width: "100%",
            padding: "10px 40px 10px 10px",
            boxSizing: "border-box",
          }}
          className="search-input"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "2rem",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ marginRight: "2rem", paddingLeft: "0rem" }}>
          <Link
            to="/SignPage"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                height: "2.5rem",
                backgroundColor: "white",
                borderRadius: "0.3rem",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #D8D8D8",
              }}
              className="login-button"
            >
              <img
                src={home}
                style={{
                  width: "15px",
                  height: "15px",
                  paddingRight: "0.4rem",
                }}
                className="home-button-image"
              />
              <p className="home-button-text">Sign Up or Login</p>
            </button>
          </Link>
        </div>

        <div className="account-button">
          <AnchorTemporaryDrawer />
        </div>
      </div>
    </Container>
  );
};

export default Header;
