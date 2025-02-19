import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme/colors";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm, Controller } from "react-hook-form";
import TextInput from "../components/TextInput";
import { logInUser } from "../services/auth/logInUser";
import { authenticateUser } from "../services/auth/authenticateUser";
import { emailSchema } from "../features/menu/validations/email.validation";
import { passwordSchema } from "../features/menu/validations/password.validation";

type LoginForm = {
  email: string;
  password?: string;
};

export default function Login() {
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [buttonText, setButtonText] = useState("Continue");
  const [emailError, setEmailError] = useState("");

  const schema = useMemo(
    () =>
      z.object({
        email: emailSchema,
        password: showPasswordField
          ? passwordSchema
          : passwordSchema.optional(),
      }),
    [showPasswordField],
  );

  const form = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = form.handleSubmit(async (values) => {
    const { email, password } = values;

    const response = await authenticateUser(email);

    if (response?.token) {
      setShowPasswordField(true);
      setButtonText("Log In");
    }

    if (response.message === "Email not found. Please create an account.") {
      setShowCreateAccount(true);
      setEmailError(response.message);
      return;
    }

    if (email && password) {
      const loginResponse = await logInUser(email, password);

      if (loginResponse?.token) {
        localStorage.setItem("token", loginResponse.token);
        navigate("/");
      } else {
        setShowPasswordField(true);
        form.setError("password", {
          type: "manual",
          message: loginResponse.message || "Invalid password",
        });
      }
    }
  });

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
          onClick={() => navigate("/Account")}
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
            {buttonText}
          </Typography>
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <TextInput
                label="Email address"
                value={field.value ?? ""}
                onChange={field.onChange}
                error={fieldState.error?.message ?? emailError}
                placeholder="e.g. name@example.com"
                type="email"
                autoComplete="email"
                required
                disabled={showPasswordField}
              />
            )}
          />

          {showPasswordField && (
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <TextInput
                  label="Password"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                  placeholder="Please enter the password"
                  type="password"
                  autoComplete="password"
                  required
                />
              )}
            />
          )}

          {showCreateAccount && (
            <Button
              type="button"
              onClick={() =>
                navigate(
                  `/Account/SignUp?email=${encodeURIComponent(form.getValues("email"))}`,
                )
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
            disabled={!form.formState.isValid}
            type="submit"
            variant="filled"
            sx={{
              display: showCreateAccount ? "none" : "flex",
              fontWeight: "bold",
              mt: 2,
              mb: 1,
              width: "100%",
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
