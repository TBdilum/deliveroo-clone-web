import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { dishes } from "../../../data/Sides";

const DishView = () => {
  return (
    <Box sx={{ background: "gray", padding: "1rem" }}>
      {/* {categories.map((category, index) => (
        <Box key={index} sx={{ marginBottom: "2rem", width: "100%" }}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {category}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {dishes.map((dish) => (
              <Card
                key={dish.id}
                sx={{
                  width: "23%", // Fixed width to fit 4 cards with some spacing
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={dish.image}
                  alt={dish.name}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    padding: "0.5rem",
                  }}
                >
                  <Typography variant="h6" component="div">
                    {dish.name}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {dish.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "1rem",
                      width: "100%",
                      backgroundColor: "#00b8a9",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#00897b",
                      },
                    }}
                  >
                    +
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))} */}
    </Box>
  );
};

export default DishView;
