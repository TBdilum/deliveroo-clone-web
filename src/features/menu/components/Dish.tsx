import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { IDish } from "../../../data/Sides";

type DishProps = {
  data: IDish;
};

const Dish = ({ data }: DishProps) => {
  return (
    <Card
      sx={{
        border: "1px solid #ccc",
        borderRadius: "2",
        overflow: "hidden",
        p: 3,
        display: "flex",
        flexDirection: "row",
        minHeight: "100px",
      }}
    >
      <Box
        sx={{
          pr: 2,
        }}
      >
        <Typography
          sx={{
            overflow: "hidden",
            lineClamp: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            fontWeight: "bold",
          }}
        >
          {data.name}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            lineClamp: 2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.description}
        </Typography>
        <Typography>{data.price}</Typography>
      </Box>
      <Box>
        <Box
          sx={{
            aspectRatio: 1,
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src={data.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default Dish;
