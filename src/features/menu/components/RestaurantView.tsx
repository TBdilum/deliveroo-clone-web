import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "../../../theme";

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

interface RestaurantViewProps {
  restaurant: Restaurant;
}

const RestaurantView = ({ restaurant }: RestaurantViewProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 6 }} key={restaurant.name}>
      <Link
        to={`/restaurants/${restaurant.name}/menu`}
        style={{
          textDecoration: "none",
          color: "inherit",
          width: "100%",
        }}
      >
        <Container
          disableGutters
          sx={{
            display: "flex",
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
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "8px 0 0 8px",
                }}
              >
                <img
                  alt={restaurant.name}
                  src={restaurant.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "300px",
                    minWidth: "200px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
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
    </Grid>
  );
};

export default RestaurantView;
