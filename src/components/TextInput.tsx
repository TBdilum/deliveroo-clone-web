import { TextField, Typography, TextFieldProps } from "@mui/material";
import React from "react";

type TextInputProps = Omit<TextFieldProps, "error"> & {
  error?: string;
};

function TextInput({ error, ...props }: TextInputProps) {
  return (
    <>
      <TextField {...props} error={!!error} />
      {error && (
        <Typography color="error" sx={{ mb: 1.5, textAlign: "center" }}>
          {error}
        </Typography>
      )}
    </>
  );
}

export default TextInput;
