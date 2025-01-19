import React, { useState } from "react";
import Button from "../../../components/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mx: 5,
        alignItems: "center",
      }}
    >
      <OutlinedInput
        fullWidth
        value={searchKey}
        onChange={handleOnChange}
        id="outlined-basic"
        sx={{
          height: 43,
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        }
        endAdornment={
          searchKey.length > 0 ? (
            <InputAdornment position="start">
              <CloseIcon onClick={() => setSearchKey("")} />
            </InputAdornment>
          ) : undefined
        }
      />
      <IconButton
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <SearchOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
