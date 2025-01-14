import React from "react";
import { IDish } from "../../../types/dish.types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type SpecialCardProps = {
  data: IDish;
};

const SpecialCard = ({ data }: SpecialCardProps) => {
  return (
    <Card sx={{ overflow: "unset", width: "100%", height: "300px", mr: 2 }}>
      <CardMedia
        sx={{ height: 140, width: "200px" }}
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            overflow: "hidden",
            display: "-webkit-box",
          }}
        >
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpecialCard;
