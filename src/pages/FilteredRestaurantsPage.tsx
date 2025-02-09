import { getFilteredRestaurants } from "../backend/getFilteredRestaurants";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import RestaurantView from "../features/menu/components/RestaurantView";

interface FilteredRestaurant {
  name: string;
  image: string;
  description: string;
  tags: string[];
  openingAt: string;
  closingAt: string;
  minimumValue: string;
  deliveryCharge: string;
}

const FilteredRestaurantsPage = () => {
  const [loading, setLoading] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    FilteredRestaurant[]
  >([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() ?? "";

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getFilteredRestaurants();
        if (!searchQuery) {
          setFilteredRestaurants(data);
        }
        const filterRestaurants = data.filter(
          (restaurant: FilteredRestaurant) => {
            return restaurant.name.toLowerCase().includes(searchQuery);
          },
        );
        setFilteredRestaurants(filterRestaurants);
      } catch (error) {
        console.error("Error fetching restaurants", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, [searchQuery]);

  let content;
  if (loading) {
    content = (
      <Typography variant="h6" color="gray" sx={{ mb: 4 }}>
        ...Loading
      </Typography>
    );
  } else if (filteredRestaurants.length === 0) {
    content = (
      <Typography variant="h6" color="gray" sx={{ mb: 4 }}>
        No Restaurants Found
      </Typography>
    );
  } else {
    content = filteredRestaurants.map((restaurant) => (
      <RestaurantView key={restaurant.name} restaurant={restaurant} />
    ));
  }

  return (
    <Box
      sx={{
        paddingTop: "100px",
        paddingX: "2rem",
        display: "flex",
        flexDirection: { sm: "column", xs: "column", lg: "row" },
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        {content}
      </Grid>
    </Box>
  );
};

export default FilteredRestaurantsPage;
