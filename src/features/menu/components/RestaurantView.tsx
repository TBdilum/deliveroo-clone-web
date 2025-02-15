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
    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }} key={restaurant.name}>
      <Link
        to={`/restaurants/${restaurant.name}/menu`}
        style={{
          textDecoration: "none",
          color: "inherit",
          width: "100%",
          display: "flex",
        }}
      >
        <Container
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minWidth: { sm: "400px", md: "400px" },
            borderRadius: 2,
            boxShadow: `0px 2px 8px ${Colors.boxShadow.default}`,
            marginBottom: "2rem",
            marginTop: "2rem",
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "200px",
                  maxHeight: "300px",
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

                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 7 }}>
              <Box
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: { xs: "0rem", sm: "2rem" },
                  textWrap: { xs: "wrap", sm: "nowrap" },
                  gap: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", textWrap: "none" }}
                  component="div"
                >
                  {restaurant.name}
                </Typography>

                <Typography sx={{ color: "gray" }} component="div">
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
