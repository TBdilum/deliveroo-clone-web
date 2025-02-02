import { Box, Container, Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import { GooglePlayButton } from "react-mobile-app-button";
import { AppStoreButton } from "react-mobile-app-button";

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

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Grid container spacing={2}>
              <Grid>
                <AppStoreButton
                  theme={"dark"}
                  width={200}
                  height={50}
                  url={""}
                />
              </Grid>

              <Grid>
                <GooglePlayButton
                  theme={"dark"}
                  width={200}
                  height={50}
                  url={""}
                />
              </Grid>
            </Grid>
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
