import React, { useEffect, useState } from "react";
import Back from "../assets/back.png";
import main from "../assets/Main.jpeg";
import MostPopularItems from "../components/MostPopularItems";
import { mostPopularItems } from "../data/MostPopularItems";
import { Container } from "@mui/material";
import Salads from "../components/Salads";
import Header from "../components/Header";
import "../utils/index.css";
import ScrollSpy from "react-ui-scrollspy";

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
  }, [categories]);

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
          disableGutters
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
            borderBottom: "1px solid #D8D8D8",
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
          }}
          className="header-container"
        >
          <div
            style={{ position: "relative", width: "40%", height: "auto" }}
            className="image-container"
          >
            <button
              style={{
                width: "40%",
                margin: "0rem 2rem ",
                position: "absolute",
                top: "72%",
                left: "52%",
                borderRadius: "0.3rem",
                backgroundColor: "white",
                border: "1px solid #D8D8D8",
                padding: "1rem 0rem",
                fontSize: "1rem",
                color: "#333",
                zIndex: 10,
              }}
              className="start-group-order-button"
            >
              Start Group Order
            </button>
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
              <div className="info-buttons">
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  <p style={{ fontWeight: "bold", margin: "0.2rem 0rem " }}>
                    Info
                  </p>
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
                  width: "auto",
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
                  width: "auto",
                  marginTop: "1rem",
                  borderRadius: "0.3rem",
                  backgroundColor: "white",
                  border: "1px solid #D8D8D8",
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  color: "#333",
                }}
                className="start-group-order"
              >
                Start Group Order
              </button>
            </div>
          </div>
        </Container>
        <Container
          disableGutters
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
                {category}
              </button>
            ))}
          </div>
        </Container>

        <Container
          className="main-container1"
          sx={{ display: "flex", flexDirection: "row" }}
          disableGutters
          maxWidth={false}
        >
          <div
            style={{
              padding: "2rem 0rem 2rem 0rem",
              display: "flex",
              flexDirection: "column",
            }}
            className="main-container"
          >
            <span>Adults need around 2000 kcal a day</span>
            <MostPopularItems mostPopularItems={mostPopularItems} />
            <ScrollSpy scrollThrottle={300}>
              {categories.map((category, index) => (
                <div
                  key={index}
                  id={category}
                  data-to-scrollspy-id={index}
                  style={{ paddingBottom: "2rem" }}
                >
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
                </div>
              ))}
            </ScrollSpy>
          </div>
          <div
            style={{
              maxHeight: "80vh",
              border: "1px solid #D8D8D8",
              position: "sticky",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "167px",
              paddingLeft: "2rem",
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
