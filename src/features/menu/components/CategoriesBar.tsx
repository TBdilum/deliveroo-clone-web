import { Box, Container } from "@mui/material";
import { useState } from "react";
import CategoryChip from "./CategoryChip";
import { categories } from "../../../data/Sides";

const CategoriesBar = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>();

  const handleOnCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
  };

  return (
    <Box
      sx={{
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: "#EEEEEE",
      }}
    >
      <Container
        disableGutters
        sx={{
          height: "50px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "sticky",
          top: "60px",
          zIndex: "500",
          backgroundColor: "white",
          overflowY: "hidden",
          overflowX: "scroll",
        }}
      >
        {categories.map((category) => (
          <CategoryChip
            key={category.id}
            data={category}
            onClick={handleOnCategoryClick}
            selected={selectedCategoryId === category.id}
          />
        ))}
      </Container>
    </Box>
  );
};

export default CategoriesBar;
