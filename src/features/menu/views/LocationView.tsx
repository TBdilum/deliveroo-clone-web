import { Box, IconButton, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const LocationView = () => {
  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "750px",
        backgroundColor: "#f1f0f0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          maxWidth: "1200px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "400px",
            padding: "3rem",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            Track orders to your door
          </Typography>
          <Typography sx={{ color: "#555", fontSize: "1rem" }}>
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
                fontSize: "0.9rem",
              }}
            >
              <AppleIcon sx={{ fontSize: "1.5rem" }} />
              <Typography sx={{ fontSize: "0.9rem" }}>App Store</Typography>
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
              <Typography sx={{ fontSize: "0.9rem" }}>Google Play</Typography>
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ width: "65%", height: "100%", position: "relative" }}>
          <img
            src="https://img2.storyblok.com/filters:format(webp)/f/62776/x/ca59b51c51/map-min.svg"
            alt="map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              width: "400px",
              position: "absolute",
              top: "1%",
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
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LocationView;
