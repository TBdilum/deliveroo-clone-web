/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Colors } from "../theme/colors";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { createNewUser } from "../backend/createNewUser";
import PasswordInput from "../PasswordInput";
import { passwordSchema } from "../features/menu/validations/password.validation";
const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const emailFromLogin = searchParams.get("email") ?? "";

  const [email, setEmail] = useState(emailFromLogin);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await createNewUser(email, password);

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (err: any) {
      setError(err.data.message);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    try {
      passwordSchema.parse(passwordValue);
      setError("");
    } catch (err: any) {
      setError(err.errors[0].message);
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    try {
      if (confirmPasswordValue !== password) {
        setConfirmError("Passwords do not match");
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
        setConfirmError("");
      }
    } catch (err: any) {
      setConfirmError(err.errors[0].message);
      setIsButtonDisabled(true);
    }
  };

  return (
    <Box
      sx={{
        mt: 10,
        justifyContent: "center",
        height: "50vh",
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
              mb: 3,
              fontSize: "1.5rem",
              color: Colors.text.default,
            }}
          >
            Sign Up
          </Typography>
          <label>
            <Typography
              sx={{ fontWeight: "normal", color: Colors.text.default }}
            >
              Email
            </Typography>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g name@example.com"
              required
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
          </label>
          <label>
            <Typography
              sx={{ fontWeight: "normal", color: Colors.text.default }}
            >
              Password
            </Typography>
            <PasswordInput
              onChange={handlePasswordChange}
              value={password}
              error={error}
            />
            {error && (
              <Typography color="error" sx={{ textAlign: "left" }}>
                {error}
              </Typography>
            )}
            <Typography
              sx={{ fontWeight: "normal", color: Colors.text.default, mt: 2 }}
            >
              Confirm Password
            </Typography>
            <PasswordInput
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
              error={confirmError}
            />
            {confirmError && (
              <Typography color="error" sx={{ textAlign: "left" }}>
                {confirmError}
              </Typography>
            )}
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
              sx={{
                cursor: "pointer",
                disabled: isButtonDisabled ? "none" : "flex",
                padding: "0.7rem",
                fontWeight: "bold",
                mb: 1,
                width: "100%",
                backgroundColor: isButtonDisabled
                  ? Colors.background.subtleLight
                  : Colors.background.brand,
                color: isButtonDisabled
                  ? Colors.text.placeholder
                  : Colors.text.inverse,
              }}
            >
              Create Account
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpPage;
