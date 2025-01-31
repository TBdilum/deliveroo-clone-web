import Button from "../components/Button";
import { Box, Typography, Divider } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";

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
          }}
        >
          Continue With Facebook
        </Button>
        <Button
          PrefixComponent={
            <img
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTJjMC02LjYyNyw1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRjMCwxMS4wNDUsOC45NTUsMjAsMjAsMjBjMTEuMDQ1LDAsMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxNi4zMTgsNCw5LjY1Niw4LjMzNyw2LjMwNiwxNC42OTF6Ii8+PHBhdGggZmlsbD0iIzRDQUY1MCIgZD0iTTI0LDQ0YzUuMTY2LDAsOS44Ni0xLjk3NywxMy40MDktNS4xOTJsLTYuMTktNS4yMzhDMjkuMjExLDM1LjA5MSwyNi43MTUsMzYsMjQsMzZjLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiIvPjxwYXRoIGZpbGw9IiMxOTc2RDIiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MWMwLjAwMS0wLjAwMSwwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMmw2LjE5LDUuMjM4QzM2Ljk3MSwzOS4yMDUsNDQsMzQsNDQsMjRDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjwvc3ZnPg=="
            />
          }
          sx={{
            color: "black",
            border: "1px solid grey",
            marginTop: "0.5rem",
            width: "100%",
            height: "3rem",
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
          }}
        >
          Continue With Email
        </Button>
        <Typography
          sx={{
            fontSize: "0.8rem",
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
