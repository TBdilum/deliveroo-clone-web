import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { categories, dishes, IDish } from "../../../data/Sides";
import Dish from "../components/Dish";
import { useMemo } from "react";

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
          (item) => item.id.toString() === categoryId,
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
          <Typography>{category?.name}</Typography>
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
                key={dish.id}
                size={{
                  sm: 12,
                  md: 6,
                  lg: 4,
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
