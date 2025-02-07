import Button from "../components/Button";
import { Box, Typography, Divider } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import { Svgs } from "../theme";

const SignUpPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {/* Sign-Up Form Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign={"left"}
          sx={{ marginBottom: "1rem" }}
        >
          Sign Up or Log In
        </Typography>

        {/* Input Fields */}
        <Button
          PrefixComponent={<FacebookOutlinedIcon />}
          sx={{
            color: "white",
            backgroundColor: "#4c69ba",
            width: "100%",
            height: "3rem",
            gap: "0.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Continue With Facebook
        </Button>

        <Button
          PrefixComponent={<Svgs.GoogleLogo width={"1.5rem"} />}
          sx={{
            color: "black",
            border: "1px solid grey",
            marginTop: "0.5rem",
            width: "100%",
            height: "3rem",
            mb: "0.5rem",
            gap: "0.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Continue With Google
        </Button>
        <Button
          PrefixComponent={<AppleIcon />}
          sx={{
            color: "white",
            backgroundColor: "black",
            marginTop: "0.5rem",
            width: "100%",
            height: "3rem",
            gap: "0.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Continue With Apple
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "1.5rem 0",
          }}
        >
          <Divider sx={{ flexGrow: 1, backgroundColor: "#ccc" }} />
          <Typography
            sx={{ margin: "0 1rem", fontSize: "0.9rem", color: "black" }}
          >
            or
          </Typography>
          <Divider sx={{ flexGrow: 1, backgroundColor: "#ccc" }} />
        </Box>

        <Button
          PrefixComponent={<EmailOutlinedIcon />}
          sx={{
            width: "100%",
            color: "white",
            backgroundColor: "rgb(0, 204, 188)",
            height: "3rem",
            gap: "0.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Continue With Email
        </Button>
        <Typography
          sx={{
            fontSize: "0.75rem",
            marginTop: "1rem",
            width: "100%",
            textAlign: "left",
          }}
        >
          By continuing you agree to our{" "}
          <Link
            to={"https://deliveroo.co.uk/legal"}
            style={{ color: "rgb(0, 204, 188)" }}
          >
            T&Cs.
          </Link>{" "}
          Please also check out our
          <br />
          <Link
            to={"https://deliveroo.co.uk/legal"}
            style={{ color: "rgb(0, 204, 188)" }}
          >
            Privacy Policy.
          </Link>{" "}
          We use your data to offer you a personalised experience and to better
          understand and improve our services.{" "}
          <Link
            to={"https://deliveroo.co.uk/privacy#use-of-your-information"}
            style={{ color: "rgb(0, 204, 188)" }}
          >
            For more information see here.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpPage;
