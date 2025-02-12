import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "../components/Button";
import { Colors } from "../theme/colors";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createNewUser } from "../backend/createNewUser";
const NewSignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log(userName, password);

    try {
      const token = await createNewUser(userName, password);
      if (token) {
        localStorage.setItem("token", token);
        console.log(token, `successfully logged in as ${userName}`);
      }
      navigate("/");
    } catch (err) {
      setError("Failed to Create User. Please try again.");
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
            Sign Up Or Log In
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
              alignItems: "center",
              flexDirection: "column",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Button
              type="submit"
              style={{
                width: "100%",
                marginTop: "1rem",
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

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                margin: "1.5rem 0",
              }}
            >
              <Divider
                sx={{
                  flexGrow: 1,
                  borderBottomWidth: 2,
                  borderColor: Colors.border.subtle,
                }}
              />
              <Typography
                sx={{
                  margin: "0 1rem",
                  fontSize: "0.9rem",
                  color: Colors.text.default,
                }}
              >
                or
              </Typography>
              <Divider
                sx={{
                  flexGrow: 1,
                  borderBottomWidth: 2,
                  borderColor: Colors.border.subtle,
                }}
              />
            </Box>
            <Link
              to={"/SignPage/login"}
              style={{
                textDecoration: "none",
                color: Colors.text.inverse,
                width: "100%",
              }}
            >
              <Button
                type="submit"
                style={{
                  width: "100%",

                  backgroundColor: Colors.background.brand,
                }}
              >
                Log In
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default NewSignUpPage;
