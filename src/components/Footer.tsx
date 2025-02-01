import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div
      style={{
        backgroundColor: "rgb(46, 51, 51)",
        paddingTop: "2rem",
        color: "white",
        position: isMainPage ? "sticky" : "static",
        width: "100%",
        display: "flex",
        top: "auto",
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
          gap: "2rem",
          width: "80%",
          height: "auto",
        }}
      >
        {/* Discover Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(61, 65, 65)",
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

        {/* Legal Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(61, 65, 65)",
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
            Legal
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Terms & Conditions
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Privacy
          </Typography>
        </Box>

        {/* Help Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(61, 65, 65)",
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
            Help
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            FAQs
          </Typography>
        </Box>

        {/* Social & Apps Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(61, 65, 65)",
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
            {/* App Store Button */}
            <Grid item xs={12} sm={6}>
              <IconButton
                sx={{
                  backgroundColor: "#000",
                  color: "white",
                  borderRadius: "4px", // Boxy style
                  width: "100%", // Make button stretch
                }}
              >
                <AppleIcon sx={{ fontSize: "1.5rem" }} />
                <Typography sx={{ fontSize: "0.8rem", ml: 1 }}>
                  App Store
                </Typography>
              </IconButton>
            </Grid>

            {/* Google Play Button */}
            <Grid item xs={12} sm={6}>
              <IconButton
                sx={{
                  backgroundColor: "#00CCBC",
                  color: "white",
                  borderRadius: "4px", // Boxy style
                  width: "100%", // Make button stretch
                }}
              >
                <AndroidIcon sx={{ fontSize: "1.5rem" }} />
                <Typography sx={{ fontSize: "0.8rem", ml: 1 }}>
                  Google Play
                </Typography>
              </IconButton>
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
            color: "white",
            justifyContent: "space-between",
            marginTop: "-1.5rem",
            marginBottom: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.6rem",
              marginTop: "0.4rem",
            }}
          >
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
          <Box right={0}>
            <Typography sx={{ fontSize: "0.8rem", color: " #585c5c" }}>
              © 2025 Deliveroo
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
