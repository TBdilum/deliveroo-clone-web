import { Button } from "@mui/material";
import React from "react";

type CategoryChipProps = {
  data: {
    id: number;
    name: string;
  };
  onClick: (id: number) => void;
  selected: boolean;
};

const CategoryChip = ({ data, onClick, selected }: CategoryChipProps) => {
  const handleOnClick = () => {
    onClick(data.id);
  };

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        display: "flex",
        backgroundColor: selected ? "#00b8a9" : "#ffffff",
        color: selected ? "#ffffff" : "#00b8a9",
        borderRadius: "20px",
        border: "none",
        fontWeight: selected ? "bold" : "regular",
        cursor: "pointer",
        textWrap: "wrap",
        paddingLeft: "1rem",
        mr: 2,
      }}
    >
      {data.name}
    </Button>
  );
};

export default CategoryChip;
