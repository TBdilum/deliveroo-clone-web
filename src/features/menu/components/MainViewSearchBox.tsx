import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { Link } from "react-router-dom";
import { Colors } from "../../../theme";

const MainViewSearchBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        width: "100%",
        maxWidth: "600px",
        zIndex: 1,
        padding: "2rem",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bolder",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "2.4rem" },
          lineHeight: 1.2,
          textAlign: "center",
          textWrap: "none",
          whiteSpace: "pre",
          textOverflow: "ellipsis",
          color: Colors.text.default,
          width: "100%",
        }}
      >
        Restaurants, takeaways,
        <br /> supermarkets and <br /> shops. Delivered.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          marginTop: "30px",
          width: "180%",
          alignContent: "center",
          justifyContent: "center",
          maxWidth: "600px",
          height: "180px",
          padding: "1rem 1.5rem",
          borderRadius: "4px",
          marginLeft: "-100px",
          color: Colors.text.default,
          boxShadow: `0px 4px 10px ${Colors.boxShadow.default}`,
        }}
      >
        <Typography sx={{ fontSize: "13px", paddingBottom: "1rem" }}>
          Enter a restaurant name to see what we deliver:
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Restaurants"
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
                  <NearMeOutlinedIcon sx={{ color: Colors.background.brand }} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ marginRight: "-8px" }}>
                <IconButton
                  sx={{
                    backgroundColor: Colors.background.brand,
                    borderRadius: "25px",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <Typography sx={{ color: Colors.text.inverse }}>
                    Search
                  </Typography>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography sx={{ fontSize: "12px", marginTop: "1rem" }}>
          <Link
            to={"/SignPage"}
            style={{
              color: Colors.background.brand,
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
