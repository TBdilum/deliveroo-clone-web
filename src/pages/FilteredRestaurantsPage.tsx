import { getFilteredRestaurants } from "../backend/getFilteredRestaurants";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Colors } from "../theme/colors";

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
      <Link
        to={`/restaurants/${restaurant.name}/menu`}
        key={restaurant.name}
        style={{
          textDecoration: "none",
          color: "inherit",
          width: "300px",
          height: "100%",
        }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 2,
            boxShadow: `0px 2px 8px ${Colors.boxShadow.default}`,
            marginBottom: "2rem",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              cursor: "pointer",
              transform: "scale(1.004)",
              boxShadow: `0px 2px 8px ${Colors.boxShadow.default}`,
            },
          }}
        >
          <Grid container spacing={0} alignItems="center">
            <Grid size={{ xs: 12, sm: 5 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "8px 0 0 8px",
                  overflow: "hidden",
                }}
              >
                <img
                  alt={restaurant.name}
                  src={restaurant.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "300px",
                    minWidth: "300px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 7 }}>
              <Box
                sx={{
                  padding: "1rem",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {restaurant.name}
                </Typography>

                <Typography variant="body2" sx={{ color: "gray" }}>
                  {restaurant.tags.join(" • ")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Link>
    ));
  }

  return (
    <Box
      sx={{
        marginTop: "3rem",
        paddingTop: "60px",
        paddingX: "6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {content}
    </Box>
  );
};

export default FilteredRestaurantsPage;
