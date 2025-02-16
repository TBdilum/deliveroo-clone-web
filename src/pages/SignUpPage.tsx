import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "../components/Button";
import { Colors } from "../theme/colors";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createNewUser } from "../backend/createNewUser";
const SignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await createNewUser(userName, password);

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch {
      setError("User Exists Please Log In");
    }
  };

  return (
    <Box
      sx={{
        mt: 10,
        justifyContent: "center",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        marginLeft: "1.1rem",
        marginRight: "1.5rem",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "400px" }}>
        <form onSubmit={handleSubmit}>
          <Typography
            sx={{
              fontWeight: "bolder",
              mb: 4,
              fontSize: "2rem",
              color: Colors.text.default,
            }}
          >
            Sign Up
          </Typography>
          <label>
            <Typography sx={{ fontWeight: "bold", color: Colors.text.default }}>
              Username
            </Typography>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
              onInvalid={(e) => {
                (e.target as HTMLInputElement).setCustomValidity(
                  "Please enter a valid username.",
                );
              }}
              onInput={(e) => {
                (e.target as HTMLInputElement).setCustomValidity("");
              }}
              style={{
                padding: "0.5rem",
                fontSize: "1.2rem",
                width: "100%",
                height: "40px",
                marginBottom: "1rem",
              }}
            />
          </label>
          <label>
            <Typography sx={{ fontWeight: "bold", color: Colors.text.default }}>
              Password
            </Typography>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              onInvalid={(e) => {
                (e.target as HTMLInputElement).setCustomValidity(
                  "Password can not be empty.",
                );
              }}
              onInput={(e) => {
                (e.target as HTMLInputElement).setCustomValidity("");
              }}
              style={{
                width: "100%",
                height: "40px",
                padding: "0.5rem",
                fontSize: "1.2rem",
              }}
            />
          </label>
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Button
              type="submit"
              style={{
                width: "100%",
                marginTop: "3rem",
                marginBottom: "1rem",
                backgroundColor: Colors.background.default,
                color: Colors.text.default,
              }}
            >
              Create Account
            </Button>
            {error && (
              <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
                {error}
              </Typography>
            )}

            <Typography>
              Existing User? Please{" "}
              <Link
                to={"/SignPage/login"}
                style={{
                  textDecoration: "none",
                  color: Colors.background.brand,
                  width: "100%",
                }}
              >
                Log In
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpPage;
