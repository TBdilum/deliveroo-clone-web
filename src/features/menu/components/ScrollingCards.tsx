import AutoScrollingCardSection from "./AutomaticScrollCard";
import { Box } from "@mui/material";

const ScrollingCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgb(253, 252, 252)",
        padding: "2rem 0",
      }}
    >
      <AutoScrollingCardSection />
    </Box>
  );
};

export default ScrollingCards;
