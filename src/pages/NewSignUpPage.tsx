import { Input, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Form } from "react-router-dom";

const NewSignUpPage = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Form>
        <Typography>UserName</Typography>
        <Input placeholder="Username here"></Input>
      </Form>
    </Box>
  );
};

export default NewSignUpPage;
