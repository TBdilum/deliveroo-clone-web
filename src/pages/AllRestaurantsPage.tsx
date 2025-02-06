import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { getAllRestaurants } from "../backend/getAllRestaurants";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import InfoButton from "../features/menu/components/InfoButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
    <Box sx={{ paddingTop: "60px", paddingLeft: "6rem", paddingRight: "6rem" }}>
      {restaurant.map((restaurant, index) => (
        <Container
          key={index}
          disableGutters
          maxWidth="xl"
          sx={{
            px: {
              xs: 0,
              sm: 2,
              md: 2,
            },
            py: 3,
          }}
        >
          <Grid container>
            <Grid
              size={{
                xs: 12,
                sm: 3,
                md: 4,
                lg: 3,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "200px",
                  borderRadius: {
                    xs: 0,
                    sm: 2,
                    md: 2,
                    overflow: "hidden",
                  },
                  boxShadow: "0px 1px 1px 0.5px  #ccc",
                }}
              >
                <img
                  alt="MainDish-image"
                  src={restaurant.image}
                  style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 9,
                md: 8,
                lg: 5,
              }}
              sx={{
                px: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {restaurant.name}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  display: "flex",
                  whiteSpace: "nowrap",
                }}
              >
                <Typography variant="body1">
                  Opens at {restaurant.openingAt}
                </Typography>
                <Typography sx={{ mx: 1 }}>•</Typography>
                <Typography variant="body1">
                  ${restaurant.minimumValue} minimum
                </Typography>
                <Typography sx={{ mx: 1 }}>•</Typography>
                <Typography variant="body1">
                  ${restaurant.deliveryCharge} delivery
                </Typography>
              </Typography>

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
            </Grid>
          </Grid>
        </Container>
      ))}
    </Box>
  );
};

export default AllRestaurantsPage;
