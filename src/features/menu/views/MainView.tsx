import { Box, Grid2 } from "@mui/material";

import MainViewSearchBox from "../components/MainViewSearchBox";

const MainView = () => {
  return (
    <div
      style={{
        minHeight: "450px",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#f1f0f0",
      }}
    >
      <Grid2>
        <Grid2>
          <Box
            sx={{
              backgroundColor: "#00CCBC",
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-80%)",
              width: "25%",
              maxWidth: "200px",
              height: "auto",
            }}
          >
            {/* Blue Background Image */}
            <img
              src="/assets/route.svg"
              alt="Blue Background"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            {/* Left Graphic Inside the Blue Background */}
            <img
              src="/assets/left-2x.png"
              alt="Left Graphic"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "auto",
              }}
            />
          </Box>
        </Grid2>
        <Grid2>
          <Box sx={{ backgroundColor: "#00CCBC" }}>
            {/* Right Image */}
            <img
              src="/assets/right-2x.png"
              alt="Right Graphic"
              style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                width: "30%",
                maxWidth: "250px",
                height: "auto",
              }}
            />
          </Box>
        </Grid2>
        <Grid2>
          <MainViewSearchBox />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default MainView;
