/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { authenticateUser } from "../backend/authenticateUser";
import { Colors } from "../theme/colors";
import { emailSchema } from "../features/menu/validations/email.validation";
import { passwordSchema } from "../features/menu/validations/password.validation";
import { logInUser } from "../backend/logInUser";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    try {
      emailSchema.parse(email);
      setError("");
      setIsButtonDisabled(false);
    } catch (err: any) {
      setError(err.errors[0].message);
      setIsButtonDisabled(true);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    try {
      passwordSchema.parse(passwordValue);
      setError("");
      setIsButtonDisabled(false);
    } catch (err: any) {
      setError(err.errors[0].message);
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (email && password) {
        const response = await logInUser(email, password);
        if (response?.token) {
          localStorage.setItem("token", response.token);
          navigate("/");
        }
      } else {
        const response = await authenticateUser(email);
        if (response?.token) {
          localStorage.setItem("token", response.token);
          setShowPasswordField(true);
          setIsButtonDisabled(true);
        }
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setShowCreateAccount(true);
      setIsButtonDisabled(true);
    }
  };

  const token = localStorage.getItem("token");

  return (
    <Box
      sx={{
        mt: 20,
        mb: 10,
        justifyContent: "center",
        height: "auto",
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
            {token ? "Log In" : "Sign Up Or Log In"}
          </Typography>
          <label>
            <Typography
              sx={{ fontWeight: "normal", color: Colors.text.default }}
            >
              Email address
            </Typography>
            <input
              type="email"
              value={email}
              placeholder="e.g. name@example.com"
              autoComplete="email"
              required
              onChange={handleEmailChange}
              readOnly={showPasswordField}
              style={{
                padding: "1.5rem",
                fontSize: "1rem",
                width: "100%",
                height: "40px",
                marginTop: "0.5rem",
                border: `1px solid ${Colors.border.default}`,
                borderRadius: "3px",
                boxShadow: `inset 0 1px 3px ${Colors.boxShadow.default}, inset 0 0 0 100px #fff`,
              }}
            />
          </label>

          {showPasswordField && (
            <Box>
              <Typography
                sx={{ fontWeight: "normal", color: Colors.text.default }}
              >
                Password
              </Typography>
              <PasswordInput
                value={password}
                onChange={handlePasswordChange}
                error={error}
              />
            </Box>
          )}

          {error && (
            <Typography color="error" sx={{ mb: 1.5, textAlign: "center" }}>
              {error}
            </Typography>
          )}
          {showCreateAccount && (
            <Button
              type="button"
              onClick={() =>
                navigate(`/Account/SignUp?email=${encodeURIComponent(email)}`)
              }
              sx={{
                cursor: "pointer",
                padding: "0.7rem",
                fontWeight: "bold",
                mb: 1,
                width: "100%",
                backgroundColor: Colors.background.brand,
                color: Colors.text.inverse,
              }}
            >
              Create Account
            </Button>
          )}

          <Button
            type="submit"
            disabled={isButtonDisabled}
            sx={{
              cursor: isButtonDisabled ? "not-allowed" : "pointer",
              display: showCreateAccount ? "none" : "flex",
              padding: "0.7rem",
              fontWeight: "bold",
              mt: 2,
              mb: 1,
              width: "100%",
              backgroundColor: isButtonDisabled
                ? Colors.background.default
                : Colors.background.brand,
              color: Colors.text.inverse,
            }}
          >
            {showPasswordField ? "Log in" : "Continue"}
          </Button>

          <Button
            style={{
              padding: "0.7rem",
              fontWeight: "normal",
              width: "100%",
              border: `1px solid ${Colors.border.default}`,
              backgroundColor: Colors.background.defaultLight,
              color: Colors.background.brand,
            }}
          >
            {showPasswordField ? "Forgot Password?" : "Forgot Email?"}
          </Button>
        </form>
      </Box>
    </Box>
  );
}
