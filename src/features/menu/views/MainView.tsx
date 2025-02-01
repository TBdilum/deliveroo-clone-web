import { Box, Grid } from "@mui/material";
import MainViewSearchBox from "../components/MainViewSearchBox";

const MainView = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f1f0f0",
        backgroundImage: "url(/assets/route.svg)",
        backgroundSize: "50%",
        backgroundPosition: "3% 20%",
        top: "0",
        backgroundRepeat: "no-repeat",
        padding: "2rem 1rem",
      }}
    >
      {/* Left Section */}
      <Grid item xs={0} sm={0} md={4} lg={4}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Left Graphic Inside */}
          <img
            src="/assets/left-2x.png"
            alt="Left Graphic"
            style={{
              position: "absolute",
              top: "80%",
              left: "65%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "auto",
            }}
          />
        </Box>
      </Grid>

      {/* Center Section */}
      <Grid item xs={12} sm={8} md={4} lg={4} sx={{ zIndex: 100 }}>
        <MainViewSearchBox />
      </Grid>

      {/* Right Section */}
      <Grid item xs={0} sm={4} md={4} lg={4}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: { xs: "none", sm: "flex", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Right Graphic */}
          <img
            src="/assets/right-2x.png"
            alt="Right Graphic"
            style={{
              minWidth: "160%",
              translate: "10% ",
              width: "200%",
              height: "auto",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainView;
