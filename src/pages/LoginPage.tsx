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
    try {
      const response = await authenticateUser(userName, password);
      if (response?.token) {
        localStorage.setItem("token", response.token);
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <Box
      sx={{
        mt: 10,
        justifyContent: "center",
        height: "37vh",
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
              mb: 3,
              fontSize: "1.5rem",
              color: Colors.text.default,
            }}
          >
            Sign up or log in
          </Typography>
          <label>
            <Typography
              sx={{ fontWeight: "normal", color: Colors.text.default }}
            >
              Email address
            </Typography>
            <input
              type="text"
              value={userName}
              placeholder="e.g. name@example.com"
              autoComplete="email"
              required
              onInvalid={(e) => {
                (e.target as HTMLInputElement).setCustomValidity(
                  "Please enter a valid Email address.",
                );
              }}
              onInput={(e) => {
                (e.target as HTMLInputElement).setCustomValidity("");
              }}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                padding: "1.5rem",
                fontSize: "1rem",
                width: "100%",
                height: "40px",
                marginBottom: "1rem",
                marginTop: "0.5rem",
                border: `1px solid ${Colors.border.default}`,
                borderRadius: "3px",
                boxShadow: `inset 0 1px 3px ${Colors.boxShadow.default}, inset 0 0 0 100px #fff`,
              }}
            />
            <style>
              {`
      input::placeholder {
        color: ${Colors.text.light};
      }
    `}
            </style>
          </label>
          <label style={{ display: "none" }}>
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

          <Button
            type="submit"
            style={{
              padding: "0.7rem",
              fontWeight: "bold",
              width: "100%",
              backgroundColor: Colors.background.brand,
              color: Colors.text.inverse,
            }}
          >
            Continue
          </Button>
          <Button
            style={{
              padding: "0.7rem",
              marginTop: "0.5rem",
              fontWeight: "normal",
              width: "100%",
              border: `1px solid ${Colors.border.default}`,
              backgroundColor: Colors.background.defaultLight,
              color: Colors.background.brand,
            }}
          >
            Forgot password?
          </Button>
        </form>
      </Box>
    </Box>
  );
}
