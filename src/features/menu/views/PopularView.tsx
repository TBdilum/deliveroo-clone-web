import { Box, Container, Typography } from "@mui/material";
import SpecialCard from "../components/SpecialCard";
import { popular } from "../../../data/Sides";

const PopularView = () => {
  return (
    <Container
      disableGutters
      sx={{ height: "380px", marginBottom: "1rem", marginTop: "2rem" }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
        }}
        variant="h6"
      >
        Popular with other people
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        {popular.map((item) => (
          <SpecialCard data={item} key={item.id} />
        ))}
      </Box>
    </Container>
  );
};

export default PopularView;
