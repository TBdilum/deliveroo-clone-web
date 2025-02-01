import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { Link } from "react-router-dom";

const MainViewSearchBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        maxWidth: "600px",
        zIndex: 1,
        padding: "1rem",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bolder",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "2rem" },
          lineHeight: 1.2,
        }}
      >
        Restaurants, takeaways, supermarkets, and shops. Delivered.
      </Typography>

      {/* Search Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          marginTop: "30px",
          width: "100%",
          maxWidth: "430px",
          padding: "1rem 1.5rem",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography sx={{ fontSize: "10px" }}>
          Enter a postcode to see what we deliver:
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter postcode..."
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              fontSize: { xs: "1rem", sm: "2.5rem", md: "2rem" },
              height: "50px",
            },
            "& .MuiInputBase-input": {
              alignItems: "center",
              marginBottom: { xs: "0", sm: "0.7rem" },
              "&::placeholder": {
                fontSize: { xs: "0.75rem", sm: "1rem" },
                opacity: 0.4,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <NearMeOutlinedIcon sx={{ color: "#00CCBC" }} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ marginRight: "-8px" }}>
                <IconButton
                  sx={{
                    backgroundColor: "#00CCBC",
                    borderRadius: "25px",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <Typography sx={{ color: "white" }}>Search</Typography>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography sx={{ fontSize: "11px", marginTop: "0.5rem" }}>
          <Link
            to={"/SignPage"}
            style={{
              color: "#00CCBC",
              textDecoration: "none",
              paddingRight: "5px",
            }}
          >
            Log in
          </Link>
          for your recent addresses.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainViewSearchBox;
