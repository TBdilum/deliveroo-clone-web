import { Box, Container, Typography, Grid2 as Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import { Colors } from "../theme";

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div
      style={{
        backgroundColor: Colors.background.darker,
        paddingTop: "2rem",
        position: isMainPage ? "sticky" : "static",
        width: "100%",
        display: "flex",
        bottom: "0",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          width: "80%",
          height: "auto",
          color: Colors.text.inverse,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: Colors.background.dark,
            padding: "1.5rem",
            flex: 1,
            minWidth: "240px",
            minHeight: "209px",
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontSize: "1rem" }}
          >
            Discover
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Deliveroo
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Investors
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            About Us
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: Colors.background.dark,
            padding: "1.5rem",
            flex: 1,
            minWidth: "240px",
            minHeight: "209px",
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontSize: "1rem" }}
          >
            Legal
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Terms & Conditions
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Privacy
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: Colors.background.dark,
            padding: "1.5rem",
            flex: 1,
            minWidth: "240px",
            minHeight: "209px",
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontSize: "1rem" }}
          >
            Help
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            FAQs
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: Colors.background.dark,
            padding: "1.5rem",
            flex: 1,
            minWidth: "240px",
            minHeight: "150px",
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontSize: "1rem" }}
          >
            Take Deliveroo with you
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ sm: 12, xs: 12 }}>
              <AppStoreButton theme={"dark"} width={200} height={50} url={""} />
            </Grid>

            <Grid size={{ sm: 12, xs: 12 }}>
              <GooglePlayButton
                theme={"dark"}
                width={200}
                height={50}
                url={""}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            top: "0",
            width: "100%",
            color: Colors.text.inverse,
            justifyContent: "space-between",
            marginTop: "-1.5rem",
            marginBottom: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.6rem",
              marginTop: "1rem",
            }}
          >
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
          <Box right={0}>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: Colors.text.light,
                mt: "1rem",
              }}
            >
              © 2025 Deliveroo
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
