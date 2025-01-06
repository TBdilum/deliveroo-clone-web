import React, { useState } from "react";
import Back from "../assets/back.png";
import main from "../assets/Main.jpeg";
import MostPopularItems from "../components/MostPopularItems";
import { mostPopularItems } from "../data/MostPopularItems";
import { Container } from "@mui/material";
import Salads from "../components/Salads";
import Header from "../components/Header";
import "../utils/index.css";

const HomePage = () => {
  const [activeButton, setActiveButton] = useState(0);

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

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <>
      <div
        style={{
          padding: "0.5rem 4rem 1rem 4rem",
          margin: 0,
          width: "100vw",
          overflowX: "visible",
          boxSizing: "border-box",
        }}
      >
        <Header />
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
            borderBottom: "1px solid #D8D8D8",
            paddingBottom: "2rem",
            boxSizing: "border-box",
            width: "100%",
            height: "50%",
          }}
        >
          <div
            style={{ width: "50%", height: "auto" }}
            className="image-container"
          >
            <img
              src={main}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Main"
            />
          </div>
          <div
            className="buttons-container"
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "1px solid #D8D8D8",
              paddingBottom: "2rem",
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
            }}
          >
            <div style={{ paddingLeft: "1rem", width: "100%" }}>
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.8rem",
                  margin: "0",
                }}
              >
                Tossed - St Martin's Lane
              </p>
              <p style={{ fontSize: "1rem", color: "#666" }}>
                10 - 20 min · Chicken · Salads · Healthy
              </p>
              <p style={{ fontSize: "1rem", color: "#666" }}>
                0.20 miles away · Closes at 21:00 · £7.00 minimum
              </p>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                <p style={{ fontWeight: "bold", margin: "0.2rem 0" }}>Info</p>
                <p style={{ margin: "0.2rem 0 1rem", color: "#00b8a9" }}>
                  Map, allergens and hygiene rating
                </p>
              </button>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                <p style={{ fontWeight: "bold", margin: "0.2rem 0" }}>
                  4.8 Excellent
                </p>
                <p style={{ margin: "0.2rem 0", color: "#00b8a9" }}>
                  See all 500 reviews
                </p>
              </button>
            </div>

            <div
              style={{ textAlign: "right", alignItems: "right", width: "30%" }}
              className="delivery-buttons"
            >
              <p
                style={{
                  fontSize: "1rem",
                  margin: "0 0 1rem 0",
                  color: "#666",
                }}
              >
                Deliver is 5 - 15 min
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#00b8a9",
                    paddingLeft: "0.6rem",
                    cursor: "pointer",
                  }}
                >
                  Change
                </button>
              </p>
              <button
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  borderRadius: "0.3rem",
                  border: "1px solid #D8D8D8",
                  backgroundColor: "transparent",
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  color: "#333",
                }}
              >
                Start Group Order
              </button>
            </div>
          </div>
        </Container>

        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            borderBottom: "1px solid #D8D8D8",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            paddingBottom: "1rem",
            display: "flex",
            flexDirection: "row",
            position: "sticky",
            top: "70px",
            backgroundColor: "white",
            zIndex: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "1rem",
              width: "100%",
            }}
            className="categories-container"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                style={{
                  backgroundColor: activeButton === index ? "#00b8a9" : "white",
                  color: activeButton === index ? "white" : "#00b8a9",
                  borderRadius: "20px",
                  border: "none",
                  fontWeight: activeButton === index ? "bold" : "",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  textWrap: "nowrap",
                }}
                className="category-item"
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </Container>
        <Container
          sx={{
            maxWidth: "100vw",
            display: "flex",
            flexDirection: "row",
            paddingBottom: "2rem",
          }}
          disableGutters={true}
          maxWidth={false}
        >
          <div
            style={{
              maxWidth: "75%",
              padding: "2rem 2rem 2rem 0rem",
              flex: "3",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Adults need around 2000 kcal a day</span>
            <MostPopularItems mostPopularItems={mostPopularItems} />
            {categories.map((category) => (
              <>
                <span
                  style={{
                    fontFamily: "inherit",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  {category}
                </span>
                <Salads />
              </>
            ))}
          </div>
          <div
            style={{
              maxWidth: "25%",
              width: "25%",
              maxHeight: "83vh",
              border: "1px solid #D8D8D8",
              position: "sticky",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "160px",
              padding: "2rem 5rem",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#fff",
              zIndex: 10,
              marginTop: "2rem",
            }}
            className="cart-container"
          >
            <p>Cart</p>
          </div>
        </Container>
      </div>
      <footer />
    </>
  );
};

export default HomePage;
