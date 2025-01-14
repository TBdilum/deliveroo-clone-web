import { Link } from "react-router-dom";
import logo from "/assets/deliverooLogo.svg";
import { Box, Container } from "@mui/material";
import Button from "./Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchBar from "../features/menu/components/SearchBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
      }}
    >
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
        disableGutters
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
                  pr: 1,
                }}
              />
            }
          >
            Account
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
