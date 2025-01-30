import { Box } from "@mui/material";
import MainCard from "../components/MainCard";

const MainCardView = () => {
  return (
    <div
      style={{
        height: "600px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "1550px",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <MainCard
          image="/assets/partner.jpg"
          title="Partner with us"
          description="Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food."
        />
        <MainCard
          image="/assets/rider.jpg"
          title="Ride with us"
          description="The freedom to fit work around your life. Plus great fees, perks and discounts."
        />
        <MainCard
          image="/assets/work.jpg"
          title="Deliveroo for Work"
          description="From team lunches to meal allowances for your late night workers, we've got your workplace meals covered."
        />
        <MainCard
          image="/assets/giftcard.jpg"
          title="Gift Cards"
          description="Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliveroo gift card."
        />
      </Box>
    </div>
  );
};

export default MainCardView;
