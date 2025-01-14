import React from "react";
import Button from "../../../components/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box } from "@mui/material";

const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <input
        placeholder="Search the Store"
        style={{ width: "100%", height: "60%" }}
      />
      <Button>
        <SearchOutlinedIcon />
      </Button>
    </Box>
  );
};

export default SearchBar;
