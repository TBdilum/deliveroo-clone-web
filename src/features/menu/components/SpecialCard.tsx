import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "../../../components/Button";
import { IDish } from "../../../data/Sides";

type SpecialCardProps = {
  data: IDish;
};

const SpecialCard = ({ data }: SpecialCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "300px",
        mr: 2,
        my: 2,
        display: "flex",
        flexDirection: "column",
        overflow: "unset",
        background: "white",
        boxShadow: "5px 10px 15px -3px rgba(0,0,0,0.1)",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.05)",
      }}
    >
      <CardMedia
        sx={{ height: 140, width: "200px", borderRadius: 1 }}
        image={data.image}
        title={data.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
      </CardContent>
      <Box sx={{ width: "80%", padding: "0 16px 16px 16px" }}>
        <Button sx={{ width: "100%" }}>+</Button>
      </Box>
    </Card>
  );
};

export default SpecialCard;
