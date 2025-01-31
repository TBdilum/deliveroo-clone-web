import { Box, Grid } from "@mui/material";

import MainViewSearchBox from "../components/MainViewSearchBox";

const MainView = () => {
  return (
    <Grid
      container
      sx={{
        top: "0",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f1f0f0",
        backgroundImage: "url(/assets/route.svg)",
        backgroundSize: "100%",
        backgroundPosition: " 3% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Section */}
      <Grid item xs={0} sm={0} md={4}>
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
      <Grid item xs={12} sm={8} md={4} sx={{ zIndex: 100 }}>
        <MainViewSearchBox />
      </Grid>

      {/* Right Section */}
      <Grid item xs={0} sm={4} md={4} lg={4}>
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
          {/* Right Graphic */}
          <img
            src="/assets/right-2x.png"
            alt="Right Graphic"
            style={{
              translate: "10% ",
              width: "180%",
              height: "auto",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainView;
