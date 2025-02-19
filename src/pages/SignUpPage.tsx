import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Colors } from "../theme/colors";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { createNewUser } from "../services/auth/createNewUser";
import { useSnackbar } from "notistack";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm, Controller } from "react-hook-form";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type SignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const emailFromLogin = searchParams.get("email") ?? "";

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  });

  const form = useForm<SignUpForm>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    const { email, confirmPassword } = values;

    const data = await createNewUser(email, confirmPassword);

    if (data?.token) {
      localStorage.setItem("token", data.token);
      enqueueSnackbar("Account created successfully!", {
        variant: "success",
      });
      navigate("/");
    }
  });

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
            Sign Up
          </Typography>
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <TextInput
                label="Email address"
                value={field.value ?? emailFromLogin}
                onChange={field.onChange}
                error={fieldState.error?.message}
                placeholder="e.g. name@example.com"
                type="email"
                autoComplete="email"
                required
              />
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <TextInput
                label="Password"
                value={field.value ?? ""}
                onChange={field.onChange}
                error={fieldState.error?.message}
                placeholder="Please enter a password"
                type="password"
                autoComplete="password"
                required
              />
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <TextInput
                label="Confirm Password"
                value={field.value ?? ""}
                onChange={field.onChange}
                error={fieldState.error?.message}
                placeholder="Confirm password"
                type="password"
                autoComplete="password"
                required
              />
            )}
          />
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

          <Button
            disabled={!form.formState.isValid}
            type="button"
            onClick={() => {}}
            sx={{
              cursor: "pointer",
              mt: 2,
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
        </form>
      </Box>
    </Box>
  );
};

export default SignUpPage;
