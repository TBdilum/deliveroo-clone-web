import { Box, Container, Typography } from "@mui/material";
import SpecialCard from "../components/SpecialCard";
import { specials } from "../../../data/Sides";

const SpecialView = () => {
  return (
    <Container disableGutters sx={{ mt: 2, mb: 5 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        20% off selected items
      </Typography>
      <Typography variant="body2">
        Spend £15.00, get 20% off selected items – T&Cs apply. New customers
        only.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          overflowY: "hidden",
          overflowX: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {specials.map((item) => (
          <SpecialCard data={item} key={item.id} />
        ))}
      </Box>
    </Container>
  );
};

export default SpecialView;
