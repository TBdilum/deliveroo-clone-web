import { Box, Grid2 as Grid } from "@mui/material";
import { getAllRestaurants } from "../backend/getAllRestaurants";
import { useEffect, useState } from "react";

import RestaurantView from "../features/menu/components/RestaurantView";

interface Restaurant {
  name: string;
  image: string;
  description: string;
  tags: string[];
  openingAt: string;
  closingAt: string;
  minimumValue: string;
  deliveryCharge: string;
}

const AllRestaurantsPage = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getAllRestaurants();
        if (!data) {
          setError("Restaurant not found.");
        } else {
          setRestaurant(data);
        }
      } catch (error) {
        console.error("Error fetching Restaurant", error);
      }
    };

    fetchRestaurants();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        paddingTop: "100px",
        paddingX: "2rem",
        display: "flex",
        flexDirection: { sm: "column", xs: "column", lg: "row" },
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {restaurant.map((restaurant) => (
          <RestaurantView key={restaurant.name} restaurant={restaurant} />
        ))}
      </Grid>
    </Box>
  );
};

export default AllRestaurantsPage;
