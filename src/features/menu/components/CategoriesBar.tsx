import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryChip from "./CategoryChip";
import { categories } from "../../../data/Sides";

const CategoriesBar = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);

  const handleOnCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
  };

  useEffect(() => {
    setSelectedCategoryId(categories[0].id);
  }, []);

  return (
    <Box
      sx={{
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: "#EEEEEE",
        position: "sticky",
        height: "70px",
        alignItems: "center",
        display: "flex",
        top: "60px",
        zIndex: "1001",
        backgroundColor: "white",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          overflowX: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
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
