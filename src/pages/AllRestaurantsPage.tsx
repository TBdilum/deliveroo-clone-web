import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { getAllRestaurants } from "../backend/getAllRestaurants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../theme/colors";

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
        paddingTop: "60px",
        paddingX: "6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {restaurant.map((restaurant) => (
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
            sx={{
              width: "100%",
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
                      objectFit: "fill",
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
      ))}
    </Box>
  );
};

export default AllRestaurantsPage;
