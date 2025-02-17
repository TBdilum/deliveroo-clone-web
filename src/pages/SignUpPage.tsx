/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Colors } from "../theme/colors";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { createNewUser } from "../backend/createNewUser";
import PasswordInput from "../PasswordInput";
import { passwordSchema } from "../features/menu/validations/password.validation";
import { useSnackbar } from "notistack";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SignUpPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [checked, setChecked] = useState(false);
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
        enqueueSnackbar("Account created successfully!", {
          variant: "success",
        });
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

  function label() {
    return (
      <Typography sx={{ fontWeight: "normal", color: Colors.text.default }}>
        I Agree to{" "}
        <Link
          to={"https://deliveroo.co.uk/legal"}
          style={{ color: Colors.background.brand, textDecoration: "none" }}
        >
          Terms and conditions
        </Link>
      </Typography>
    );
  }

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
        flexDirection: "column",
      }}
    >
      <Box>
        <Button
          onClick={() => navigate("/Account/LogIn")}
          PrefixComponent={<ArrowBackIcon sx={{ height: "1.3rem" }} />}
          sx={{
            border: "none",
            color: Colors.background.brand,
            fontSize: "1rem",
            fontWeight: "normal",
            borderRadius: "150px",
            mb: 3,
            left: "-200px",
            "&:hover": {
              border: "none",
            },
          }}
        >
          Back
        </Button>
      </Box>
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
                outlineColor: Colors.text.default,
                border: `1px solid ${Colors.border.default}`,
                padding: "1.5rem",
                fontSize: "1rem",
                width: "100%",
                height: "40px",
                marginBottom: "1rem",
                marginTop: "0.5rem",
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
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: Colors.background.brand }}
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              }
              label={label()}
            />
          </FormGroup>

          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
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
                backgroundColor:
                  !checked || isButtonDisabled
                    ? Colors.background.subtleLight
                    : Colors.background.brand,
                color:
                  !checked || isButtonDisabled
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
