import React, { useState } from "react";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
const LocationSelector = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOnClick = () => {
    setIsDialogOpen(true);
  };

  const handleOnClose: React.MouseEventHandler = (e) => {
    setIsDialogOpen(false);
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
      }}
      onClick={handleOnClick}
    >
      <DirectionsBikeOutlinedIcon />
      <Typography
        sx={{
          mx: 2,
        }}
      >
        No location selected
      </Typography>
      <Typography
        sx={{
          color: "#00b8a9",
        }}
      >
        Change
      </Typography>

      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleOnClose}
        open={isDialogOpen}
      >
        <DialogTitle>Your Location</DialogTitle>
        <IconButton
          onClick={handleOnClose}
          aria-label="delete"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
    </Box>
  );
};

export default LocationSelector;
