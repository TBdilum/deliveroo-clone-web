import { Link } from "react-router-dom";
import logo from "/assets/deliverooLogo.svg";
import { useLocation } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Button from "./Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchBar from "../features/menu/components/SearchBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const location = useLocation();
  const isTransparent = location.pathname === "/";
  const inSignPage = location.pathname === "/SignPage";

  return (
    <Box
      sx={{
        backgroundColor: isTransparent ? "transparent" : "white",
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: isTransparent ? "absolute" : "sticky",
        top: "0",
        zIndex: "1000",
        paddingBottom: "0.8rem",
        paddingTop: "0.5rem",
        borderBottom: isTransparent ? "none" : "0.5px solid #ccc",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src={logo} height={32} alt="Deliveroo Logo" />
          </Link>
        </Box>

        {/* Search Bar Section (only on /menu route) */}
        {location.pathname === "/menu" && (
          <Box
            sx={{
              flex: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "0.5rem",
            }}
          >
            <SearchBar />
          </Box>
        )}

        {/* Buttons Section */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "1.7rem",
          }}
        >
          {location.pathname === "/" && (
            <Button
              sx={{
                backgroundColor: "white",
                border: "none",
                display: {
                  xs: "flex",
                  sm: "none",
                  md: "flex",
                },
              }}
              PrefixComponent={
                <ExpandMoreIcon
                  sx={{
                    color: "rgb(0, 204, 188)",
                    pr: 1,
                  }}
                />
              }
            >
              <Typography sx={{ color: "#2e3333" }}>Partner with Us</Typography>
            </Button>
          )}

          <Button
            sx={{
              border: "0.02px solid #ccc",
              display: { xs: "none", sm: "flex" },
              mr: 0.5,
              fontSize: "1rem",
              backgroundColor: "white",
            }}
            PrefixComponent={
              <HomeOutlinedIcon
                sx={{
                  color: "rgb(0, 204, 188)",
                  pr: 0.8,
                }}
              />
            }
          >
            <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
              <Link
                to={"/SignPage"}
                style={{
                  textDecoration: "none",
                  color: "#2e3333",
                }}
              >
                Sign up or login
              </Link>
            </Typography>
          </Button>

          <Button
            sx={{
              display: { xs: "none", sm: "flex" },
              backgroundColor: "white",
              border: inSignPage
                ? "0.5px solid rgb(232, 230, 230)"
                : "0.02px solid #ccc",
            }}
            PrefixComponent={
              <Person2OutlinedIcon
                sx={{
                  color: "rgb(0, 204, 188)",
                }}
              />
            }
          >
            <Typography
              sx={{
                color: "#2e3333",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              Account
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
