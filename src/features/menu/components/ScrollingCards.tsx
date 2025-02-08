import { Colors } from "../../../theme";
import AutoScrollingCardSection from "./AutomaticScrollCard";
import { Box } from "@mui/material";

const ScrollingCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: Colors.background.light,
      }}
    >
      <AutoScrollingCardSection />
    </Box>
  );
};

export default ScrollingCards;
