import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { authenticateUser } from "../backend/authenticateUser";
import { Colors } from "../theme/colors";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log(userName, password);

    try {
      const token = await authenticateUser(userName, password);
      if (token) {
        localStorage.setItem("token", token);
        console.log(token, `successfully logged in as ${userName}`);
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Failed to log in. Please try again.");
      console.error("Login error:", err);
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
      <Box sx={{ width: "100%", minWidth: "200px", maxWidth: "400px" }}>
        <form onSubmit={handleSubmit}>
          <Typography
            sx={{
              fontWeight: "bolder",
              mb: 4,
              fontSize: "2rem",
              color: Colors.text.default,
            }}
          >
            Log In
          </Typography>
          <label>
            <Typography sx={{ fontWeight: "bold", color: Colors.text.default }}>
              Username
            </Typography>
            <input
              type="text"
              value={userName}
              required
              onInvalid={(e) => {
                (e.target as HTMLInputElement).setCustomValidity(
                  "Please enter a valid username.",
                );
              }}
              onInput={(e) => {
                (e.target as HTMLInputElement).setCustomValidity("");
              }}
              onChange={(e) => setUserName(e.target.value)}
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
              value={password}
              required
              onInvalid={(e) => {
                (e.target as HTMLInputElement).setCustomValidity(
                  "Password can not be empty.",
                );
              }}
              onInput={(e) => {
                (e.target as HTMLInputElement).setCustomValidity("");
              }}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                padding: "0.5rem",
                fontSize: "1.2rem",
              }}
            />
          </label>
          {error && (
            <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
              {error}
            </Typography>
          )}

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: Colors.background.brand,
                color: Colors.text.inverse,
              }}
            >
              Log In
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
