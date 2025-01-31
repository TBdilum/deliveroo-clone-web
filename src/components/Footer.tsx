import { Box, Container, Typography, IconButton } from "@mui/material";
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
    <div>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bottom: "0",
          width: "100vw",
          backgroundColor: "rgb(46, 51, 51)",
          padding: "2rem 4rem",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: isMainPage ? "absolute" : "static",
          top: isMainPage ? "2100px" : "",
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "60%",
            height: "100%",
            color: "white",
            gap: "2rem", // Adjust the gap for better spacing
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
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: "1rem", fontSize: "1rem" }}
            >
              Discover
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Deliveroo
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Investors
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Takeaway
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              More
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Newsroom
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Engineering Blog
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Design Blog
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Gift Cards
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Deliveroo Students
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Careers
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Restaurant Signup
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Become a Rider
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
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: "1rem", fontSize: "1rem" }}
            >
              Legal
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Terms and Conditions
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Privacy
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Cookies
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Modern Slavery Statement
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Tax Strategy
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Section 172 Statement
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Public Authority Requests
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgb(61, 65, 65)",
              padding: "1.5rem",
              flex: 1,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: "1rem", fontSize: "1rem" }}
            >
              Help
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              FAQs
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Cuisines
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
            >
              Brands
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgb(61, 65, 65)",
              padding: "1.5rem",
              flex: 1,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: "1rem",
                fontSize: "1rem",
                textWrap: "nowrap",
              }}
            >
              Take Deliveroo with you
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#000",
                  color: "white",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.9rem",
                }}
              >
                <AppleIcon sx={{ fontSize: "1.5rem" }} />
                <Typography sx={{ fontSize: "0.7rem" }}>App Store</Typography>
              </IconButton>

              <IconButton
                sx={{
                  backgroundColor: "#00CCBC",
                  color: "white",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.9rem",
                }}
              >
                <AndroidIcon sx={{ fontSize: "1.5rem" }} />
                <Typography sx={{ fontSize: "0.7rem" }}>Google Play</Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt: "0.5rem",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mr: "45rem",
              gap: "0.6rem",
            }}
          >
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>

          <Typography>© 2025 Deliveroo</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
