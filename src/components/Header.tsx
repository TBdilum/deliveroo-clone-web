import { Link } from "react-router-dom";
import logo from "/assets/deliverooLogo.svg";
import { Box, Container, Typography } from "@mui/material";
import Button from "./Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchBar from "../features/menu/components/SearchBar";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        backgroundColor: "white",
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
        <Box
          sx={{
            flex: 1,
            height: "100%",
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              mr: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
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
                pl: 1,
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
