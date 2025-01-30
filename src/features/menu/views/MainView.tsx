import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

const MainView = () => {
  return (
    <div
      style={{
        height: "450px",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#f1f0f0",
        top: "0px",
        backgroundImage: "url('/assets/route.svg')",
        backgroundPosition: "5% center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "35%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url('/assets/right-2x.png'), url('/assets/left-2x.png')",
          backgroundPosition: "114% center, 18% center",
          backgroundPositionY: "30px, 80px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50%, 20%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
              textAlign: "center",
              paddingBottom: "10px",
              fontWeight: "bolder",
              fontSize: "20rem",
              fontFamily: "inherit",
            }}
          >
            <Typography
              sx={{
                textWrap: "nowrap",
                fontWeight: "bolder",
                fontSize: "2rem",
              }}
            >
              Restaurants, takeaways,
            </Typography>
            <Typography
              sx={{
                textWrap: "nowrap",
                fontWeight: "bolder",
                fontSize: "2rem",
              }}
            >
              supermarkets and
            </Typography>
            <Typography
              sx={{
                textWrap: "nowrap",
                fontWeight: "bolder",
                fontSize: "2rem",
              }}
            >
              shops. Delivered.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.3rem",
              backgroundColor: "white",
              marginTop: "30px",
              width: "430px",
              height: "auto",
              padding: "1rem 1.5rem",
              borderRadius: "5px",
              rowGap: "0.5rem",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Enter a postcode to see what we deliver:
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter postcode..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  height: "50px",
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

            <Typography sx={{ fontSize: "11px" }}>
              Log in for your recent addresses.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MainView;
