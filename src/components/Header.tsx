import { Link, useLocation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Button from "./Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchBar from "../features/menu/components/SearchBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors, Paddings, Svgs } from "../theme";

const Header = () => {
  const location = useLocation();
  const isTransparent = location.pathname === "/";

  return (
    <Box
      sx={{
        backgroundColor: isTransparent
          ? "transparent"
          : Colors.background.light,
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: isTransparent ? "absolute" : "fixed",
        top: "0",
        zIndex: "10000",
        paddingBottom: "3.2rem",
        paddingTop: "1rem",
        borderBottomWidth: isTransparent ? 0 : "0.5px",
        borderColor: Colors.border.subtle,
        borderStyle: "solid",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",

            paddingTop: Paddings.Left.header.PaddingTop,
          }}
        >
          <Link to="/">
            <img src={Svgs.DeliverooLogo} height={32} alt="Deliveroo Logo" />
          </Link>
        </Box>

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

        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "8px",
            paddingTop: Paddings.Left.header.PaddingTop,
          }}
        >
          {location.pathname === "/" && (
            <Button
              PrefixIcon={ExpandMoreIcon}
              title="Partner with Us"
              sx={{ backgroundColor: Colors.background.light }}
            />
          )}

          <Button
            PrefixIcon={HomeOutlinedIcon}
            title="Sign up or login"
            linkTo="/SignPage"
            sx={{ backgroundColor: Colors.background.light }}
          />

          <Button
            PrefixIcon={Person2OutlinedIcon}
            title="Account"
            sx={{
              backgroundColor: Colors.background.light,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
