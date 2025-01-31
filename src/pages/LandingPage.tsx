import { Box, Container } from "@mui/material";
import LocationView from "../features/menu/views/LocationView";
import MainView from "../features/menu/views/MainView";
import ScrollingCards from "../features/menu/components/ScrollingCards";
import MealDeal from "../features/menu/components/MealDeal";
import MainCardView from "../features/menu/views/MainCardView";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <Container disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          width: "100%",
        }}
      >
        <MainView />
        <ScrollingCards />
        <LocationView />
        <MealDeal />
        <MainCardView />
        <Footer />
      </Box>
    </Container>
  );
};

export default LandingPage;
