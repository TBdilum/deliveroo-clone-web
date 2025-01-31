import { Box, Grid } from "@mui/material";
import MainCard from "../components/MainCard";

const MainCardView = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "1550px",
        padding: "20px 20px",
        backgroundColor: "white",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <MainCard
            image="/assets/partner.jpg"
            title="Partner with us"
            description="Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <MainCard
            image="/assets/rider.jpg"
            title="Ride with us"
            description="The freedom to fit work around your life. Plus great fees, perks and discounts."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <MainCard
            image="/assets/work.jpg"
            title="Deliveroo for Work"
            description="From team lunches to meal allowances for your late night workers, we've got your workplace meals covered."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <MainCard
            image="/assets/giftcard.jpg"
            title="Gift Cards"
            description="Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliveroo gift card."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainCardView;
