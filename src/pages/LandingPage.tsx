import { Box } from "@mui/material";
import LocationView from "../features/menu/views/LocationView";
import MainView from "../features/menu/views/MainView";
import ScrollingCards from "../features/menu/components/ScrollingCards";
import MealDeal from "../features/menu/components/MealDeal";
import MainCardView from "../features/menu/views/MainCardView";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Order food from the best restaurants near you with Deliveroo. Fast delivery, exclusive deals, and a wide variety of cuisines to satisfy your cravings."
        />
        <meta name="keywords" content="React, Web Development, JavaScript" />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <MainView />
        <ScrollingCards />
        <LocationView />
        <MealDeal />
        <MainCardView />
      </Box>
    </>
  );
};

export default LandingPage;
