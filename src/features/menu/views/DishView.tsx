import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { dishes, IDish } from "../../../data/Sides";
import Dish from "../components/Dish";
import { useMemo } from "react";
import { categories } from "../../../data/categories";
import { Colors } from "../../../theme/colors";

const DishView = () => {
  const groupedDishes = useMemo(() => {
    const result: Record<number, IDish[]> = {};
    for (const dish of dishes) {
      if (result[dish.categoryId]) {
        result[dish.categoryId].push(dish);
      } else {
        result[dish.categoryId] = [dish];
      }
    }

    return result;
  }, []);

  const mappedCategories = useMemo(
    () =>
      Object.entries(groupedDishes).map(([categoryId, dishes]) => {
        const category = categories.find(
          (category) => category.id.toString() === categoryId,
        );

        return {
          category,
          dishes,
        };
      }),
    [groupedDishes],
  );

  return (
    <Box>
      {mappedCategories.map(({ category, dishes }, index) => (
        <Box key={category?.id ?? "" + index}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              marginTop: "5rem",
              marginBottom: "1.5rem",
              color: Colors.text.default,
            }}
          >
            {category?.name}
          </Typography>
          <Grid
            container
            spacing={{
              sm: 0,
              md: 2,
              lg: 2,
            }}
          >
            {dishes.map((dish) => (
              <Grid
                sx={{ marginBottom: "1rem" }}
                key={dish.id}
                size={{
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                }}
              >
                <Dish data={dish} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default DishView;
