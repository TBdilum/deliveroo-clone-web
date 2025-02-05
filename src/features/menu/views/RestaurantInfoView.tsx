/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import InfoButton from "../components/InfoButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocationSelector from "../components/LocationSelector";
import Button from "../../../components/Button";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRestaurants } from "../../../backend/getRestaurants";

interface Restaurant {
  name: string;
  description: string;
  tags: string[];
  openingAt: string;
  closingAt: string;
  minimumValue: number;
  deliveryCharge: number;
}

const RestaurantInfoView = () => {
  const { orgId } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (orgId) {
        try {
          const data = await getRestaurants(orgId);

          if (!data) {
            setError("Restaurant not found.");
          } else {
            setRestaurant(data);
          }
        } catch (err) {
          setError("Failed to fetch restaurant data");
        }
      } else {
        setError("Organization ID is undefined.");
      }
    };

    fetchData();
  }, [orgId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurant) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container
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
      <Box sx={{ paddingBottom: "1rem" }}>
        <Button
          PrefixComponent={<ArrowBackIcon sx={{ height: "1.3rem" }} />}
          sx={{
            gap: 1,
            color: "rgb(0, 204, 188)",
            fontSize: "1rem",
            fontWeight: "normal",
            left: "0",
            marginLeft: "-1rem",
          }}
        >
          Back
        </Button>
      </Box>
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
              borderRadius: {
                xs: 0,
                sm: 2,
                md: 2,
                overflow: "hidden",
              },
            }}
          >
            <img
              alt="MainDish-image"
              src="/assets/Main.jpeg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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
            }}
          >
            {restaurant.tags.map((tag, index) => (
              <>
                <Typography key={index + tag} variant="body1">
                  {tag}
                </Typography>
                {restaurant.tags.length > index + 1 && (
                  <Typography sx={{ mx: 1 }}>•</Typography>
                )}
              </>
            ))}
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
              ${restaurant.minimumValue.toFixed(2)} minimum
            </Typography>
            <Typography sx={{ mx: 1 }}>•</Typography>
            <Typography variant="body1">
              ${restaurant.deliveryCharge.toFixed(2)} delivery
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
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
              },
            }}
          >
            <LocationSelector />
            <Button
              sx={{ my: 2, border: "0.5px solid #ccc" }}
              PrefixComponent={
                <PeopleOutlineOutlinedIcon
                  sx={{ mr: 1, color: "rgb(0, 204, 188)" }}
                />
              }
            >
              Start Group Order
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{
            lg: 4,
          }}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
            },
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <LocationSelector />
          <Button
            sx={{ my: 2, border: "0.5px solid #ccc" }}
            PrefixComponent={
              <PeopleOutlineOutlinedIcon
                sx={{ mr: 1, color: "rgb(0, 204, 188)" }}
              />
            }
          >
            Start Group Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RestaurantInfoView;
