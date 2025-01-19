import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import InfoButton from "../components/InfoButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocationSelector from "../components/LocationSelector";
import Button from "../../../components/Button";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const restaurant = {
  name: "Tossed - Baker Street",
  tags: ["Chicken", "Salads", "Healthy"],
  openAt: "10:00",
  minimumValue: 28.0,
  deliveryCharge: 12.23,
};

const RestaurantInfoView = () => {
  return (
    <Container
      sx={{
        px: {
          xs: 0,
          sm: 2,
          md: 3,
        },
        py: 2,
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
              Opens at {restaurant.openAt}
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
            Icon={<InfoOutlinedIcon />}
          />
          <InfoButton
            title="4.8 Excellent (500+)"
            description="Tasty Food"
            Icon={<StarOutlinedIcon />}
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
              sx={{ my: 2 }}
              PrefixComponent={<PeopleAltIcon sx={{ mr: 1 }} />}
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
            sx={{ my: 2 }}
            PrefixComponent={<PeopleAltIcon sx={{ mr: 1 }} />}
          >
            Start Group Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RestaurantInfoView;
