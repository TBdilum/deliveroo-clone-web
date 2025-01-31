import { Box, Container, IconButton, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const LocationView = () => {
  return (
    <Container
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "700px",
        backgroundColor: "rgb(253, 252, 252)",
        padding: "2rem", // Add padding for responsiveness
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          width: "100%",
          height: "auto", // Adjust height to auto for column layout
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          position: "relative", // Add dynamic padding based on screen size
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "600px",
            alignItems: "flex-start",

            padding: "2rem",
            flexGrow: 1, // Make sure it grows when flexDirection is column
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

          <Box
            sx={{
              width: { xs: "150px", sm: "400px" },
              position: "absolute",
              top: "5%",
              right: "5%",
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
