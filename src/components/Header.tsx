import { Link } from "react-router-dom";
import logo from "../assets/deliverooLogo.svg";
import { Box, Container } from "@mui/material";
import Button from "./Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

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
            flex: 1,
            height: "100%",
          }}
        ></Box>
        <Box
          sx={{
            flex: 1,
            height: "100%",
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
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
