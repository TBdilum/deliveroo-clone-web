import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Box, IconButton } from "@mui/material";
import { Colors } from "../theme/colors";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export default function PasswordInput({
  value,
  onChange,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder="Please enter the password"
        required
        onChange={onChange}
        style={{
          padding: "1.5rem",
          fontSize: "1rem",
          width: "100%",
          height: "40px",
          marginTop: "0.5rem",
          outlineColor: Colors.text.default,
          border: `1px solid ${error ? "red" : Colors.border.default}`,
          borderRadius: "3px",
          boxShadow: error
            ? "0 0 0 2px rgba(255, 0, 0, 0.5)"
            : `inset 0 1px 3px ${Colors.boxShadow.default}, inset 0 0 0 100px #fff`,
        }}
      />
      <IconButton
        onClick={() => setShowPassword((prev) => !prev)}
        sx={{
          position: "absolute",
          right: 10,
          top: "27%",
        }}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </IconButton>
    </Box>
  );
}
