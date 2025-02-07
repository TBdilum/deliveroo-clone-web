/* eslint-disable react-refresh/only-export-components */
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryChip from "./CategoryChip";
import { getCategories } from "../../../backend/getCategories";
import { ICategory } from "../../../data/Sides";

export const categories: ICategory[] = [];

const CategoriesBar = () => {
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
