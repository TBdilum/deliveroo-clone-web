import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryChip from "./CategoryChip";
import { getCategories } from "../../../services/category/getCategories";
import { ICategory } from "../../../data/Sides";
import { Colors } from "../../../theme";

export const CategoriesBar = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        if (!data) {
          setError("categories not found.");
        } else {
          categories.push(data);
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleOnCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: Colors.border.default,
        position: "sticky",
        height: "70px",
        alignItems: "center",
        display: "flex",
        top: "60px",
        zIndex: "1001",
        backgroundColor: Colors.background.defaultLight,
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
