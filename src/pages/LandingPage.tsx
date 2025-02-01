import { Box } from "@mui/material";
import LocationView from "../features/menu/views/LocationView";
import MainView from "../features/menu/views/MainView";
import ScrollingCards from "../features/menu/components/ScrollingCards";
import MealDeal from "../features/menu/components/MealDeal";
import MainCardView from "../features/menu/views/MainCardView";

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <MainView />
      <ScrollingCards />
      <LocationView />
      <MealDeal />
      <MainCardView />
    </Box>
  );
};

export default LandingPage;
