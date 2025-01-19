import React from "react";
import { IDish } from "../../../types/dish.types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "../../../components/Button";

type SpecialCardProps = {
  data: IDish;
};

const SpecialCard = ({ data }: SpecialCardProps) => {
  return (
    <Card
      sx={{
        overflow: "unset",
        width: "100%",
        height: "300px",
        mr: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "1.5rem",
      }}
    >
      <CardMedia
        sx={{ height: 140, width: "200px" }}
        image={data.image}
        title={data.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
      </CardContent>
      <Box sx={{ width: "80%", padding: "0 16px 16px 16px" }}>
        <Button sx={{ width: "100%" }}>+</Button>
      </Box>
    </Card>
  );
};

export default SpecialCard;
