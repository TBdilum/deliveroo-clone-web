import { Box, Typography } from "@mui/material";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

type InfoButtonProps = {
  title: string;
  description: string;
  Icon: React.ReactNode;
};

const InfoButton = ({ title, description, Icon }: InfoButtonProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        my: 1,
      }}
    >
      <Box>{Icon}</Box>
      <Box
        sx={{
          px: 2,
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
      <Box>
        <ChevronRightOutlinedIcon />
      </Box>
    </Box>
  );
};

export default InfoButton;
