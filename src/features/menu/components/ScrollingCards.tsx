import AutoScrollingCardSection from "./AutomaticScrollCard";
import { Box } from "@mui/material";

const ScrollingCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgb(253, 252, 252)",
        padding: "0rem 0",
      }}
    >
      <AutoScrollingCardSection />
    </Box>
  );
};

export default ScrollingCards;
