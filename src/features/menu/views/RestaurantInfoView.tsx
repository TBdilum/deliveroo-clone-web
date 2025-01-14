import { Box, Container, Grid2 as Grid } from "@mui/material";
import React from "react";
import Button from "../../../components/Button";

const RestaurantInfoView = () => {
  return (
    <Container disableGutters>
      <Grid container>
        <Grid
          size={{
            xs: 12,
            sm: 4,
            md: 4,
          }}
          sx={{
            background: "red",
            height: "200px",
          }}
        >
          <img
            alt="MainDish-image"
            src="/assets/Main.jpeg"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid
          size={{
            xs: 8,
            sm: 4,
            md: 4,
          }}
          sx={{
            background: "pink",
            height: "200px",
          }}
        ></Grid>
        <Grid
          size={{
            xs: 0,
            sm: 0,
            md: 4,
          }}
          sx={{
            background: "green",
            height: "200px",
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "200px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button>Test Button 1</Button>
            <Button>Test Button 2</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RestaurantInfoView;
