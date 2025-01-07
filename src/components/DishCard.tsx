import { Container } from "@mui/material";
import React from "react";
import { dishes } from "../data/Sides";

const DishCard = () => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        paddingTop: "2rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          margin: "0 auto",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        {dishes.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #D8D8D8",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.5rem",
                  fontSize: "1.1rem",
                  color: "#333",
                }}
              >
                {item.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#00b8a9",
                  }}
                >
                  {item.price}
                </p>
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#00b8a9",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DishCard;
