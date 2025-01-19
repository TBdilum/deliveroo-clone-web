import { faker } from "@faker-js/faker";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { IDish } from "../../../types/dish.types";
import SpecialCard from "../components/SpecialCard";

export const specials: IDish[] = Array.from({ length: 25 }).map(() => ({
  id: faker.database.mongodbObjectId(),
  image: faker.image.url(),
  title: faker.food.dish(),
  description: faker.food.description(),
  price: faker.commerce.price(),
}));

const SpecialView = () => {
  return (
    <Container disableGutters sx={{ height: "400px" }}>
      <Typography variant="subtitle1">20% off selected items</Typography>
      <Typography variant="body2">
        Spend £15.00, get 20% off selected items – T&Cs apply. New customers
        only.
      </Typography>
      <span>Special Items</span>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        {specials.map((item) => (
          <SpecialCard data={item} key={item.id} />
        ))}
      </Box>
    </Container>
  );
};

export default SpecialView;
