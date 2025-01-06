import React, { useRef } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MostPopularItemsProps {
  mostPopularItems: Item[];
}

const MostPopularItems = ({ mostPopularItems }: MostPopularItemsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        padding: "1rem 4rem 0rem 0rem",
        backgroundColor: "transparent",
        width: "100%",
        height: "auto",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Most Popular Items
      </h2>

      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          border: "1px solid #ddd",
          borderRadius: "50%",
          padding: "0.5rem",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          border: "1px solid #ddd",
          borderRadius: "50%",
          padding: "0.5rem",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        ▶
      </button>

      <div
        style={{
          position: "relative",
        }}
      >
        <div
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollBehavior: "smooth",
            gap: "1.5rem",
            padding: "1rem 0rem 2rem",
          }}
          className="most-popular-items-container"
        >
          {mostPopularItems.map((item) => (
            <div
              key={item.id}
              style={{
                flex: "0 0 auto",
                width: "123px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "123px",
                  height: "123px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "0.6rem", flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    margin: "0 0 0.5rem",
                    fontWeight: "bold",
                    overflow: "hidden",
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </h3>
              </div>
              <div
                style={{
                  padding: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    margin: "0 0 0.5rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {item.price}
                </p>
                <button
                  style={{
                    width: "100%",
                    padding: "0.5rem",
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
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "150px",
            height: "100%",
            background:
              "linear-gradient(to left, rgb(255, 255, 255), rgba(255, 255, 255, 0.3))",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

export default MostPopularItems;
