import { Box, Container, IconButton, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const LocationView = () => {
  return (
    <Container
      sx={{
        width: "100%",
        padding: "2rem",
        backgroundColor: "rgb(253, 252, 252)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: "100%",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "600px",
            padding: "2rem",
            flexGrow: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}
          >
            Track orders to your door
          </Typography>
          <Typography
            sx={{ color: "#555", fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            Get your favourite food delivered in a flash. You’ll see when your
            rider’s picked up your order and be able to follow them along the
            way. You’ll get a notification when they’re nearby, too.
          </Typography>

          {/* App Store and Google Play Buttons */}
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <IconButton
              sx={{
                backgroundColor: "#000",
                color: "white",
                borderRadius: "10px",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: { xs: "0.75rem", sm: "0.9rem" },
              }}
            >
              <AppleIcon sx={{ fontSize: "1.5rem" }} />
              <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.9rem" } }}>
                App Store
              </Typography>
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
                fontSize: { xs: "0.75rem", sm: "0.9rem" },
              }}
            >
              <AndroidIcon sx={{ fontSize: "1.5rem" }} />
              <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.9rem" } }}>
                Google Play
              </Typography>
            </IconButton>
          </Box>
        </Box>

        {/* Right Section (Map Image) */}
        <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
          <img
            src="https://img2.storyblok.com/filters:format(webp)/f/62776/x/ca59b51c51/map-min.svg"
            alt="map"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />

          {/* Notification Image */}
          <Box
            sx={{
              width: { xs: "150px", sm: "350px" },
              position: "absolute",
              top: "-4%",
              right: "1%",
              backgroundColor: "transparent",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt="notification-img"
              src="/public/assets/notification.png"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LocationView;
