import { Box, Container } from "@mui/material";
import React from "react";
import SpecialCard from "../components/SpecialCard";
import { specials } from "./SpecialView";

const PopularView = () => {
  return (
    <Container disableGutters sx={{ height: "380px" }}>
      <span>Popular Items</span>
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

export default PopularView;
