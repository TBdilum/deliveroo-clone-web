import React, { useState } from "react";
import { Typography } from "@mui/material";
import { authenticateUser } from "../backend/authenticateUser";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const token = await authenticateUser(userName, password);
      if (token) {
        localStorage.setItem("token", token);
        console.log(token, "successfully logged in");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Failed to log in. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <Typography>Username</Typography>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <Typography>Password</Typography>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <Typography color="error">{error}</Typography>}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
