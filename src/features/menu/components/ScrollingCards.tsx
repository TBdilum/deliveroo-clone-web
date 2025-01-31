import AutoScrollingCardSection from "./AutomaticScrollCard";

const ScrollingCards = () => {
  return (
    <div
      style={{
        top: "500px",
        height: "auto",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "rgb(253, 252, 252)",
      }}
    >
      <AutoScrollingCardSection />
    </div>
  );
};

export default ScrollingCards;
