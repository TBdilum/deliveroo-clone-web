import Lottie from "react-lottie-player";
import loadingAnimation from "../../../assets/animations/lottie-loading-dot-animation.json";
import { Colors } from "../../../theme";
import { Box } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie
        loop
        animationData={loadingAnimation}
        play
        style={{ width: 150, height: 150, color: Colors.background.brand }}
      />
    </Box>
  );
};

export default LoadingIndicator;
