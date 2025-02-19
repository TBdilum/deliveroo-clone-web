import { TextField, Typography, TextFieldProps } from "@mui/material";
import { Colors } from "../theme";

type TextInputProps = Omit<TextFieldProps, "error"> & {
  error?: string;
};

function TextInput({ error, label, ...props }: TextInputProps) {
  return (
    <>
      <Typography sx={{ fontWeight: "normal", color: Colors.text.default }}>
        {label}
      </Typography>
      <TextField
        {...props}
        error={!!error}
        fullWidth
        sx={{
          fontSize: "1rem",
          marginTop: "0.5rem",
          marginBottom: "1rem",
          outlineColor: Colors.text.default,
          borderRadius: "3px",
          boxShadow: `inset 0 1px 3px ${Colors.boxShadow.default}, inset 0 0 0 100px #fff`,
        }}
      />
      {error && (
        <Typography variant="caption" color="error" sx={{ mb: 1.5 }}>
          {error}
        </Typography>
      )}
    </>
  );
}

export default TextInput;
