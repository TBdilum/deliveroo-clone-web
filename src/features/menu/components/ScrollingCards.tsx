import AutoScrollingCardSection from "./AutomaticScrollCard";

const ScrollingCards = () => {
  return (
    <div
      style={{
        height: "250px",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "450px",
        backgroundColor: "rgb(253, 252, 252)",
      }}
    >
      <AutoScrollingCardSection />
    </div>
  );
};

export default ScrollingCards;
