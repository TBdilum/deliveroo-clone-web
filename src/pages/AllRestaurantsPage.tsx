import { Box, Container, Grid, Typography } from "@mui/material";
import { getAllRestaurants } from "../backend/getAllRestaurants";
import { useEffect, useState } from "react";
import InfoButton from "../features/menu/components/InfoButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Link } from "react-router-dom";

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
      }}
    >
      {restaurant.map((restaurant) => (
        <Link
          to={`/restaurants/${restaurant.name}/menu`}
          key={restaurant.name}
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "100%",
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
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "2rem",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(1.02)",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Grid container spacing={0} alignItems="center">
              {/* Image Section */}
              <Grid item xs={12} sm={3}>
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
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              {/* Text Section */}
              <Grid item xs={12} sm={9}>
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

                  <Typography variant="body2" sx={{ color: "#444" }}>
                    Opens at {restaurant.openingAt} | ${restaurant.minimumValue}{" "}
                    min | ${restaurant.deliveryCharge} delivery
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 1,
                      flexDirection: "column",
                    }}
                  >
                    <InfoButton
                      title="Info"
                      description="Map, allergens and hygiene rating"
                      Icon={<InfoOutlinedIcon sx={{ color: "#585c5c" }} />}
                    />
                    <InfoButton
                      title="4.8 Excellent (500+)"
                      description="Tasty Food"
                      Icon={<StarOutlinedIcon sx={{ color: "#4d7c1b" }} />}
                    />
                  </Box>
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
