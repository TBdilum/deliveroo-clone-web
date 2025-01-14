import React, { useEffect, useState } from "react";
import main from "../assets/Main.jpeg";
import MostPopularItems from "../components/MostPopularItems";
import { mostPopularItems } from "../data/MostPopularItems";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import Salads from "../components/DishCard";
import Header from "../components/Header";
import "../utils/index.css";
import ScrollSpy from "react-ui-scrollspy";
import RestaurantInfoView from "../features/menu/views/RestaurantInfoView";
import CategoriesBar from "../features/menu/components/CategoriesBar";
import MenuView from "../features/menu/views/MenuView";
import Cart from "../features/menu/components/Cart";

const categories = [
  "🥗 Salads 🥗",
  "💪 Gym food 💪",
  "Sides",
  "🌯 Rainbow Wraps 🌯",
  "🔥 Hot Power Bowls 🔥",
  "Smoothies, shakes & juice",
  "Snacks",
  "Platters",
  "Desserts",
  "Cold Drinks",
];

const HomePage = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    const element = document.querySelector(`[data-to-scrollspy-id="${index}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let foundActive = false;

      categories.forEach((category, index) => {
        const section = document.getElementById(category);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 190 && rect.bottom >= 0) {
            setActiveButton(index);
            foundActive = true;
          }
        }
      });

      if (
        !foundActive &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight
      ) {
        setActiveButton(categories.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ margin: "none", width: "100%" }}>
      <Header />
      <RestaurantInfoView />
      <CategoriesBar />
      <Container disableGutters>
        <Grid container spacing={2}>
          <Grid
            size={{
              sm: 12,
              xs: 12,
              md: 8,
            }}
          >
            <MenuView />
          </Grid>
          <Grid
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
            size={{
              sm: 0,
              md: 4,
            }}
          >
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
