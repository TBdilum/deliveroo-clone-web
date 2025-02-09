import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "../../../components/Button";
import { IDish } from "../../../data/Sides";
import AddIcon from "@mui/icons-material/Add";
import { Colors } from "../../../theme";

type SpecialCardProps = {
  data: IDish;
};

const SpecialCard = ({ data }: SpecialCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "270px",
        mr: 2,
        my: 2,
        display: "flex",
        flexDirection: "column",
        overflow: "unset",
        backgroundColor: Colors.background.defaultLight,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: Colors.border.default,
      }}
    >
      <CardMedia
        sx={{
          minHeight: 150,
          width: "200px",
          borderRadius: "12px",
          objectFit: "cover",
        }}
        image={data.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ fontSize: "0.8rem" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {data.name}
        </Typography>
      </CardContent>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            width: "65%",
            borderRadius: "12px",
            border: "0.5px solid lightgrey",
            marginBottom: "0.5rem",
            position: "relative",
          }}
        >
          <AddIcon
            sx={{
              height: "1.2rem",
              width: "1.2rem",
              color: Colors.text.default,
            }}
          />
        </Button>
      </Box>
    </Card>
  );
};

export default SpecialCard;
