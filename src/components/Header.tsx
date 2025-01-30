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
  return (
    <Box
      sx={{
        backgroundColor: isTransparent ? "transparent" : "white",
        width: "100vw",
        height: "60px",
        position: isTransparent ? "" : "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src={logo} height={32} alt="Deliveroo Logo" />
          </Link>
        </Box>
        {location.pathname === "/menu" && (
          <Box
            sx={{
              flex: 2,
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "0.5rem",
            }}
          >
            <SearchBar />
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            height: "100%",
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end",
            gap: "1.7rem",
          }}
        >
          {location.pathname == "/" && (
            <Button
              PrefixComponent={
                <ExpandMoreIcon
                  sx={{
                    color: "rgb(0, 204, 188)",
                    pr: 1,
                  }}
                />
              }
            >
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                  },
                }}
              >
                Partner with Us
              </Typography>
            </Button>
          )}

          <Button
            sx={{
              mr: 0.5,
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              fontSize: "1rem",
            }}
            PrefixComponent={
              <HomeOutlinedIcon
                sx={{
                  color: "rgb(0, 204, 188)",
                  pr: 1,
                }}
              />
            }
          >
            Sign up or login
          </Button>
          <Button
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
